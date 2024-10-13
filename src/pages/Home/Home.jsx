import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSearchParams } from "react-router-dom";



const Home = () => {
    const [params] = useSearchParams();
    const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    useEffect(() => {
        console.log('posts')
    }, [params]);

    // if (loading) {
    //     return <div>Loading...</div>; // Индикатор загрузки
    // }

    // if (error) {
    //     return <div>Error: {error}</div>; // Показ ошибки
    // }

    return (
        <section className={styles.home}>
            <h1>Posts</h1>
        </section>
    );
};

export default Home