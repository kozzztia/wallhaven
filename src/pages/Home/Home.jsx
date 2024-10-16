import { useEffect, useState, useRef, useCallback } from 'react';
import styles from './styles.module.css';
import { useSearchParams } from "react-router-dom";
import { fetchWallpaper } from '../../getData.js';
import { findCurrentColor } from '../../helpers';
import { useLocation } from "react-router-dom";
import List from '../../components/WallpapperList/List';

const Home = () => {
    const [params] = useSearchParams();
    const [wallpappers, setWallpappers] = useState([]);
    const { pathname } = useLocation();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);  // Состояние для ошибки
    const observerRef = useRef();
    const MAX_RETRIES = 3;  // Максимальное количество попыток
    const RETRY_DELAY = 2000;  // Задержка перед новой попыткой (в миллисекундах)

    // Функция для загрузки данных с повторными попытками
    const loadWallpapers = useCallback(async (page, retries = 0) => {
        try {
            setLoading(true);
            setError(null);  // Сбрасываем ошибку перед загрузкой
            const result = await fetchWallpaper(page);
            setWallpappers((prevWallpappers) => [...prevWallpappers, result]);
        } catch (err) {
            console.error(`Fetch attempt failed. Retries left: ${MAX_RETRIES - retries}. Error:`, err);
            if (retries < MAX_RETRIES) {
                setTimeout(() => loadWallpapers(page, retries + 1), RETRY_DELAY);  // Повторная попытка через задержку
            } else {
                setError('Failed to load wallpapers. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    }, []);  // Пустой массив зависимостей, так как нет зависимостей от переменных вне функции

    useEffect(() => {
        loadWallpapers(page);
    }, [page, loadWallpapers]);

    useEffect(() => {
        const currentObserverRef = observerRef.current;

        // IntersectionObserver для бесконечной прокрутки
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading && !error) {
                setPage((prevPage) => prevPage + 1);
            }
        }, { threshold: 1.0 });

        if (currentObserverRef) {
            observer.observe(currentObserverRef);
        }

        return () => {
            if (currentObserverRef) {
                observer.unobserve(currentObserverRef);
            }
        };
    }, [loading, error]);

    return (
        <section className={styles.home}>
            <h1 style={{ color: findCurrentColor(pathname) }}>Home</h1>
            {
                wallpappers.map((item, index) => (
                    <List key={index} data={item.data} meta={item.meta} />
                ))
            }

            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Отображаем ошибку, если она есть */}

            <div ref={observerRef} style={{ height: '20px', margin: '20px 0', backgroundColor: 'transparent' }}>
                {loading && <p>Loading more wallpapers...</p>}
            </div>
        </section>
    );
};

export default Home;
