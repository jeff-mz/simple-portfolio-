import React from 'react';
import styles from './Btn.module.css'
const Btn = ({txt}) => {
    return (
        <div>
            <button className={styles.btn}>{txt}</button>
        </div>
    );
};

export default Btn;