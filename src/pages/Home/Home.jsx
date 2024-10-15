import { useEffect, useState } from 'react';
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
    useEffect(() => {
        fetchWallpaper(6).then(result => setWallpappers(wallpappers => [...wallpappers, result]));
    }, [params]);
    // console.log(wallpappers)
    return (
        <section className={styles.home}>
            <h1 style={{ color: findCurrentColor(pathname) }}>Home</h1>
            {
                wallpappers.map((item, index) => (
                    <List key={index} data={item.data} meta={item.meta} />
                ))
            }

        </section>
    );
};

export default Home