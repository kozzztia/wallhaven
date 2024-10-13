import styles from "./styles.module.css";
import PropTypes from 'prop-types';
import Logo from "../Logo/Logo";
import { links } from "../../../consts";
import HeaderLink from '../HeaderLink/HeaderLink';
import Search from "../From/Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { findCurrentColor } from '../../../helpers';

const Controllers = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const menuRef = useRef(null); // Ссылка на элемент меню

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 980) {
                setIsOpen(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Проверяем, был ли клик за пределами меню
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.controllers} ref={menuRef}>
            <Logo />
            <button className={styles.burger} onClick={() => setIsOpen(!isOpen)} style={{color: findCurrentColor(pathname) }}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            {
                links.map(link =>
                    <HeaderLink 
                        key={link.id} 
                        href={link.href} 
                        className={`${isOpen ? styles.linkActive : ""} ${styles.link}`} 
                        text={link.text} 
                        color={link.color} 
                        index={link.id} 
                    />
                )
            }
            <Search />
        </div>
    );
}

Controllers.propTypes = {
    className: PropTypes.string,
}

export default Controllers;