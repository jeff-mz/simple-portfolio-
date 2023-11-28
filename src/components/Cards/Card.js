import React from 'react';
import Btn from '../Btn/Btn';
import styles from './Card.module.css'


const Card = ({ title, src }) => {
    return (
            <div className={styles.card }>
            <img className={styles.card__img} src={src} alt='project Card' />
            <h3 className={styles.card__title}>{title}</h3>
            <p className={styles.card__desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Btn txt='View Project'></Btn>
            </div>
    );
};

export default Card;