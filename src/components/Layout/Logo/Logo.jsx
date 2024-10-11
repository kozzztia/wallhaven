import styles from "./styles.module.css";
import PropTypes from 'prop-types';
import logo from '../../../assets/logo.svg'



const Logo = () => {
  return (
    <figure className={styles.logo}>
        <img src={logo} alt="logo" />
    </figure>
  )
}

Logo.propTypes = {
    className: PropTypes.string,
}

export default Logo