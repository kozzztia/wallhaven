import styles from "./styles.module.css";
import PropTypes from 'prop-types';
import Logo from "../Logo/Logo";
import { links } from "../../../consts";
import HeaderLink from '../HeaderLink/HeaderLink';
import Search from "../From/Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';



const Controllers = () => {
    const [isOpen, setIsOpen] = useState(false);
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
    }, [])

    return (
        <div className={styles.controllers}>
            <Logo />
            <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
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
                    index={link.id}/>
                )
            }
            <Search />
        </div>
    )
}
Controllers.propTypes = {
    className: PropTypes.string,
}

export default Controllers