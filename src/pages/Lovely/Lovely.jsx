import styles from './styles.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import {PageLayout} from "../../components";

const Lovely = () => {
  const [color, setColor] = useState('red');

  return (
    <PageLayout className={styles.lovely} getColor={setColor}>
        <p>hello</p>
        <FontAwesomeIcon icon={faSpinner} className={styles.spinner} style={{color : color}} spin/>
    </PageLayout>
  )
}

export default Lovely