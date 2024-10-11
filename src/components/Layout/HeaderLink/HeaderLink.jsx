import PropTypes from 'prop-types';

const HeaderLink = ({href , className, text}) => {
    return (
        <a href={href} className={className}>{text}</a>
    )
}

HeaderLink.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired, // Указано, что это обязательное поле
    href: PropTypes.string.isRequired, // Также обязательное поле
}

export default HeaderLink;