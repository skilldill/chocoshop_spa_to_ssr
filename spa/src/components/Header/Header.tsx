import { FC } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
    return (
        <header>
            <Link to="/">
                <span className={styles.logo}>Магазин шоколада</span>
            </Link>

            <nav>
                <ul className={styles.menuItems}>
                    <li className={styles.menuItem}>
                        <Link to="/">Главная</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/catalog">Каталог</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/contacts">Контакты</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
