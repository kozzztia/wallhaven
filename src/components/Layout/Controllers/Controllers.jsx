import styles from "./styles.module.css";
import PropTypes from 'prop-types';


const Controllers = ({ className }) => {
  return (
    <form className={`${styles.controllers} ${className}`}>
        Controllers
    </form>
  )
}
Controllers.propTypes = {
    className: PropTypes.string,
}

export default Controllers