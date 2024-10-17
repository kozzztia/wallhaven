 import PropTypes from 'prop-types';
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { links } from "../../consts";

const PageLayout = ({className, children}) => {
    const { pathname } = useLocation();
    const {color , text} = links.find(link => link.href === pathname);
  return (
    <section className={[className, styles.pageLayput].join(' ')}>
        <h2 style={{color : color ? color : 'black'}}>{text}</h2>
        {
            children
        }
    </section>
  )
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default PageLayout