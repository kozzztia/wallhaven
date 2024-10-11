import styles from "./styles.module.css";
import PropTypes from 'prop-types';


const Filters = () => {
  return (
    <nav className={styles.filters}>
        Filterss
    </nav>
  )
}
Filters.propTypes = {
    className: PropTypes.string,
}

export default Filters