import styles from "./styles.module.css";
import PropTypes from 'prop-types';


const Filters = ({ className }) => {
  return (
    <nav className={`${styles.filters} ${className}`}>
        Filters
    </nav>
  )
}
Filters.propTypes = {
    className: PropTypes.string,
}

export default Filters