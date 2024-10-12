import PropTypes from 'prop-types';
import styles from "./styles.module.css";

import { NavLink } from "react-router-dom";

const HeaderLink = ({href , className, text , color}) => {
    return (
        <NavLink to={href} className={({isActive})=>`${isActive ? styles.linkActive : styles.notActive} ${styles.link} ${className}`} style={{'--shadow-color':color}}>
            {text}
        </NavLink>
    )
}

HeaderLink.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired, // Указано, что это обязательное поле
    href: PropTypes.string.isRequired, // Также обязательное поле
    color: PropTypes.string
}

export default HeaderLink;