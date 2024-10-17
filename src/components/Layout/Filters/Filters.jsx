import styles from "./styles.module.css";
import PropTypes from 'prop-types';


const Filters = () => {
  return (
    <div className={styles.filters}>
        <h2>use pexels api</h2>
    </div>
  )
}
Filters.propTypes = {
    className: PropTypes.string,
}

export default Filters