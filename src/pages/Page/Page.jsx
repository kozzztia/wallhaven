import { useEffect } from 'react';
import styles from './styles.module.css';
import { useSearchParams, useLocation } from "react-router-dom";
// import { findCurrentColor } from '../../helpers';
import {links} from "../../consts"; // Импортируем массив links

const Home = () => {
    const [params] = useSearchParams();
    const { pathname } = useLocation();

    // Находим текущую ссылку на основе пути
    const currentLink = links.find(link => link.href === pathname);
    
    return (
        <section className={styles.home}>
            <h1 style={{ color: currentLink ? currentLink.color : 'black' }}>Home</h1>

            <div>
                <p>Current path: {pathname.split('/')}</p>
                <p>Current link color: {currentLink ? currentLink.color : 'No color found'}</p>
            </div>
        </section>
    );
};

export default Home;