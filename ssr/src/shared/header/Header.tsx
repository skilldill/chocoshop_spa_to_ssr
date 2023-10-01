import { FC } from 'react';
import styles from './Header.module.css';
import { Link } from '@tramvai/module-router';

export const Header: FC = () => {
    return (
        <header>
            <Link url="/">
                <span className={styles.logo}>Магазин шоколада</span>
            </Link>

            <nav>
                <ul className={styles.menuItems}>
                    <li className={styles.menuItem}>
                        <Link url="/">Главная</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link url="/catalog">Каталог</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link url="/contacts">Контакты</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
