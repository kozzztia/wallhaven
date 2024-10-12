import styles from "./styles.module.css";
import PropTypes from 'prop-types';
import Logo from "../Logo/Logo";
import { links } from "../../../consts";
import HeaderLink from '../HeaderLink/HeaderLink';




const Controllers = () => {
    return (
        <div className={styles.controllers}>
            <Logo />
            {
                links.map(link => 
                    <HeaderLink key={link.id} href={link.href} className={styles.link} text={link.text} color={link.color}/>
                )
            }
        </div>
    )
}
Controllers.propTypes = {
    className: PropTypes.string,
}

export default Controllers