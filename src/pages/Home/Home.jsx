import styles from './styles.module.css';
import { PageLayout } from "../../components";
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { getUrl } from '../../getUrl.js';
import WallpaperList from '../../components/Lists/WallpaperList.jsx';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [wallpaper, setWallpaper] = useState([]);
  const seachValue = useSearchParams()[0].get('search');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { url, headers } = getUrl(1, seachValue); // Получаем URL и заголовки
        const response = await axios.get(url, { headers }); // Выполняем запрос с заголовками
        console.log(response.data); // Логируем ответ
        setWallpaper([response.data]); // Предполагая, что массив изображений находится в response.data.photos
      } catch (error) {
        setError(error.message); // Обработка ошибок
      } finally {
        setLoading(false); // Устанавливаем состояние загрузки в false
      }
    };
    fetchData();
    console.log(seachValue);

  }, [seachValue]);

  return (
    <PageLayout className={styles.home}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {
        wallpaper.length > 0 && wallpaper.map((wallpaper, index)=> <WallpaperList key={index} photos={wallpaper.photos} page={wallpaper.page} />)
      }
    </PageLayout>
  );
};

export default Home;
