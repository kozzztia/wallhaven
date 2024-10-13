import PropTypes from 'prop-types';
import styles from "./styles.module.css";

import { NavLink } from "react-router-dom";

const HeaderLink = ({href , className, text , color, index}) => {
    return (
        <NavLink to={href} className={({isActive})=>`${isActive ? styles.linkActive : ""} ${styles.link} ${className}`} style={{'--shadow-color':color, '--top': index}}>
            {text}
        </NavLink>
    )
}

HeaderLink.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired, // Указано, что это обязательное поле
    href: PropTypes.string.isRequired, // Также обязательное поле
    color: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
}

export default HeaderLink;