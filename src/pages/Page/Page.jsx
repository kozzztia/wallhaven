
import styles from './styles.module.css';
import { useSearchParams, useLocation } from "react-router-dom";
import {PageLayout} from "../../components";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
    const [color, setColor] = useState('red');
    const [params] = useSearchParams();
    const { pathname } = useLocation();
    
    return (
        <PageLayout className={styles.page} getColor={setColor}>
                <p>Current path: {pathname.split('/')}</p>
                {
                    params.get('search') && <p>Search query: {params.get('search')}</p>
                }
                <FontAwesomeIcon icon={faSpinner} className={styles.spinner} style={{color : color}} spin/>
        </PageLayout>
    );
};


export default Page;