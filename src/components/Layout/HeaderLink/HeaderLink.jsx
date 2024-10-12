import PropTypes from 'prop-types';
import styles from "./styles.module.css";

const HeaderLink = ({href , className, text , color}) => {
    return (
        <a href={href} className={`${styles.link} ${className}`} style={{'--shadow-color':color}}>{text}</a>
    )
}

HeaderLink.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired, // Указано, что это обязательное поле
    href: PropTypes.string.isRequired, // Также обязательное поле
    color: PropTypes.string
}

export default HeaderLink;