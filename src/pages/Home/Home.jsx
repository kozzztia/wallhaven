import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSearchParams } from "react-router-dom";



const Home = () => {
    const [params] = useSearchParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data); // Сохраняем полученные посты в состоянии
            } catch (error) {
                setError(error.message); // Устанавливаем ошибку в состояние
            } finally {
                setLoading(false); // Устанавливаем загрузку в false после завершения
            }
        };

        fetchPosts();
    }, [params]);

    if (loading) {
        return <div>Loading...</div>; // Индикатор загрузки
    }

    if (error) {
        return <div>Error: {error}</div>; // Показ ошибки
    }

    return (
        <section className={styles.home}>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Home