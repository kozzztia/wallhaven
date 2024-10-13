import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import {useLocation} from "react-router-dom"

import styles from './styles.module.css';
import { findCurrentColor } from '../../../helpers';

const Search = () => {
    const [query, setQuery] = useState('');
    const {pathname} = useLocation();
    useEffect(() => {
        // Если длина строки поиска меньше 3 символов, не запускаем поиск
        if (query.length < 3) {
            return;
        }

        const fetchResults = async () => {
            setTimeout(() => { console.log(`Search query: ${query}`) }, 500);
        };

        // Таймер на 500 мс (debounce) перед вызовом поиска
        const timerId = setTimeout(() => {
            fetchResults();
        }, 500);

        // Очищаем таймер, если пользователь продолжает вводить текст
        return () => clearTimeout(timerId);
    }, [query]);

    return (
        <label className={styles.form}>
            <input
                name='search'
                type="text"
                placeholder="Enter search query..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {query ? (
                <FontAwesomeIcon icon={faTimes} onClick={() => setQuery('')} style={{color: findCurrentColor(pathname)}}/>
            ) : (
                <FontAwesomeIcon icon={faSearch} style={{color: findCurrentColor(pathname)}}/>
            )}
        </label>
    );
};

export default Search;


