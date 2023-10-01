import { FC } from 'react';
import { image as MapPNG } from 'assets/map.png';
import styles from './ContactsPage.module.css';

export const ContactsPage: FC = () => {
    return (
        <div className="page">
            <div className={styles.contacts}>
                <h2>Контакты</h2>
                <p>
                    <b> Адрес:</b> <br />
                    Ленинградская область, <br />
                    г. Выборг, <br />
                    ул. Штурма, <br />
                    Пороховой погреб, литера А
                </p>
                <p>
                    <b> email:</b> <br />
                    <a href="mailto:museumcv@yandex.ru">museumcv@yandex.ru</a>
                </p>
                <div className={styles.mapBlock}>
                    <h2>Карта</h2>
                    <img src={MapPNG.src} alt="Карта" width="100%" />
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;