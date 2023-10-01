import { FC } from 'react';
import styles from './Header.module.css';

export const Header: FC = () => {
    return (
        <header>
            <a href="/">
                <span className={styles.logo}>Магазин шоколада</span>
            </a>

            <nav>
                <ul className={styles.menuItems}>
                    <li className={styles.menuItem}>
                        <a href="/">Главная</a>
                    </li>
                    <li className={styles.menuItem}>
                        <a href="/catalog">Каталог</a>
                    </li>
                    <li className={styles.menuItem}>
                        <a href="/contacts">Контакты</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
