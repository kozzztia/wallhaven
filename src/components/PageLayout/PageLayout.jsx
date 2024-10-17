 import PropTypes from 'prop-types';
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { links } from "../../consts";
import { useEffect } from 'react';

const PageLayout = ({className, children, getColor}) => {
    const { pathname } = useLocation();
    const {color , text} = links.find(link => link.href === pathname);
    useEffect(() => {
      if (color) {
        getColor(color);
      }
    }, [color, getColor]);
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
    getColor: PropTypes.func,
}

export default PageLayout