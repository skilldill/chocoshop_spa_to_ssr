import { FC } from 'react';
import styles from './Footer.module.css';

export const Footer: FC = () => {
    return (
        <footer>
            <span className={styles.logo}>Магазин шоколада</span>
        </footer>
    );
};
