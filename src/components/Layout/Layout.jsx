import PropTypes from 'prop-types';
import styles from "./styles.module.css";

import Controllers from "./Controllers/Controllers";
import Filters from "./Filters/Filters";

function Layout({ children }) {

    return (
        <>
            <header className={styles.header}>
                <Controllers />
                <Filters/>
            </header>

            <section className={styles.section}> 
            {children}
            </section>

            <footer className={styles.footer}>
                thnq
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}


export default Layout 