
import styles from './styles.module.css';
import { useSearchParams, useLocation } from "react-router-dom";
import {PageLayout} from "../../components";

const Page = () => {
    const [params] = useSearchParams();
    const { pathname } = useLocation();
    
    return (
        <PageLayout className={styles.page}>
                <p>Current path: {pathname.split('/')}</p>
                {
                    params.get('search') && <p>Search query: {params.get('search')}</p>
                }
        </PageLayout>
    );
};


export default Page;