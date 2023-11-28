import React from 'react';
import styles from './Showcase.module.css'
import img from "../../images/developing-img.png"
import Btn from '../Btn/Btn';
const Showcase = () => {
    return (
        <div className={styles.showcase}>
            <section className={styles.showcase_txt}>
                <h1 className={styles.title}>frontend developer</h1>
                <ul>
                    <li className={styles.showcase__item}>100% money back gurantee</li>
                    <li className={styles.showcase__item}>+100 reliable customer</li>
                    <li className={styles.showcase__item}>1 year support </li>
                </ul>
            <Btn txt='Hire Me'></Btn>
            </section>
            <section className={styles.showcase_img}>
                <img src={img} alt="developing-img" />
            </section>
        </div>
    );
};

export default Showcase;