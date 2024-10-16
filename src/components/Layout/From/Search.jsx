import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import {useLocation, useNavigate} from "react-router-dom"

import styles from './styles.module.css';
import { findCurrentColor } from '../../../helpers';

const Search = () => {
    const [query, setQuery] = useState('');
    const {pathname} = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        // Если длина строки поиска меньше 3 символов, не запускаем поиск and clear ?search param
        if (query.length < 3) {
            navigate(pathname);
            return;
        }
        // Таймер на 500 мс (debounce) перед вызовом поиска
        const timerId = setTimeout(() => {
            navigate(`${pathname}?search=${encodeURIComponent(query)}`)
        }, 500);

        // Очищаем таймер, если пользователь продолжает вводить текст
        return () => clearTimeout(timerId);
    }, [query, navigate, pathname]);

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


