import styles from "./styles.module.css";
import PropTypes from 'prop-types';
import Logo from "../Logo/Logo";
import { links } from "../../../consts";
import HeaderLink from '../HeaderLink/HeaderLink';
import Search from "../From/Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const Controllers = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.controllers}>
            <Logo />
            <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            {
                isOpen &&
                <div className={styles.barLinks}>
                    {
                        links.map(link =>
                            <HeaderLink key={link.id} href={link.href} className={styles.barLink} text={link.text} color={link.color} />
                        )
                    }
                </div>
            }
            {
                links.map(link =>
                    <HeaderLink key={link.id} href={link.href} className={styles.link} text={link.text} color={link.color} />
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