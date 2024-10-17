import styles from './styles.module.css';
import { PageLayout } from "../../components";
import { useEffect, useState, useRef, useCallback } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { getUrl } from '../../getUrl.js';
import WallpaperList from '../../components/Lists/WallpaperList.jsx';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [wallpaper, setWallpaper] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true); // Отслеживаем наличие данных
  const seachValue = useSearchParams()[0].get('search');
  const [color, setColor] = useState('red');
  const ref = useRef(null);
  const [page, setPage] = useState(1);
  const isFetchingRef = useRef(false); // Отслеживаем состояние запроса
  const observerRef = useRef(null); // Отслеживаем наблюдателя

  // Обернули fetchData в useCallback
  const fetchData = useCallback(async (pageNumber) => {
    if (isFetchingRef.current) return; // Избегаем параллельных запросов

    setLoading(true);
    isFetchingRef.current = true; // Устанавливаем флаг выполнения запроса

    try {
      const { url, headers } = getUrl(pageNumber, seachValue); // Получаем URL и заголовки
      const response = await axios.get(url, { headers }); // Выполняем запрос с заголовками

      if (response.data.photos && response.data.photos.length > 0) {
        setWallpaper((prevData) => {
          // Добавляем данные для текущей страницы, если они не пустые
          const newWallpapers = [...prevData];
          newWallpapers[pageNumber - 1] = response.data;
          return newWallpapers;
        });
      } else {
        // Если данных больше нет, отключаем наблюдателя и устанавливаем отсутствие новых данных
        setHasMoreData(false); 
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    } catch (error) {
      setError(error.message); // Обработка ошибок
    } finally {
      setLoading(false);
      isFetchingRef.current = false; // Снимаем флаг выполнения запроса
    }
  }, [seachValue]);

  // Сброс всех состояний при изменении поиска или перезагрузке страницы
  useEffect(() => {
    // Сбрасываем состояния
    setWallpaper([]);  // Очищаем список обоев
    setPage(1);        // Сбрасываем текущую страницу
    setError(null);    // Сбрасываем ошибку
    setLoading(false); // Сбрасываем состояние загрузки
    isFetchingRef.current = false; // Сбрасываем флаг выполнения запроса
    setHasMoreData(true); // Сбрасываем флаг наличия данных

    if (observerRef.current) {
      observerRef.current.disconnect(); // Отключаем старый наблюдатель
    }

    fetchData(1); // Загружаем первую страницу данных
  }, [seachValue, fetchData]);

  // Эффект для наблюдателя за скроллом
  useEffect(() => {
    const currentRef = ref.current;

    if (hasMoreData) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !loading && !isFetchingRef.current) {
            setPage((prevPage) => prevPage + 1); // Увеличиваем страницу
          }
        },
        { threshold: 1 }
      );

      if (currentRef) {
        observerRef.current.observe(currentRef);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect(); // Отключаем наблюдателя при размонтировании
      }
    };
  }, [loading, hasMoreData]);

  // Эффект для загрузки новых данных при изменении страницы
  useEffect(() => {
    if (page > 1 && hasMoreData) {
      fetchData(page); // Загружаем данные для новой страницы
    }
  }, [page, fetchData, hasMoreData]);

  return (
    <PageLayout className={styles.home} getColor={setColor}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {wallpaper.length > 0 ? wallpaper.map((wallpaper, index) => (
        <WallpaperList
          key={index}
          photos={wallpaper.photos}
          page={wallpaper.page}
          className={styles.wallpaperList}
        />
      )):<p className={styles.nothing}>nothing found</p>}
      {wallpaper.length > 0 && hasMoreData && ( // Показываем observe только если есть обои и еще есть данные
        <div ref={ref}></div>
      )}

      {loading && hasMoreData && ( // Прелоадер показываем только при наличии данных
        <FontAwesomeIcon icon={faSpinner} className={styles.spinner} style={{ color }} spin />
      )}
    </PageLayout>
  );
};

export default Home;
