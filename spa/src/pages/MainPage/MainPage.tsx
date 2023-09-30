import { FC } from 'react';
import styles from './MainPage.module.css';
import ShopJPEG from './assets/shop.jpeg';
import ChocomanJPEG from './assets/chocoman.jpeg';
import ChocoitemsJPEG from './assets/chocoitems.jpeg';

export const MainPage: FC = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Магазин шоколада</h1>
            <div className={styles.block}>
                <div>
                    <img src={ShopJPEG} alt="Магазин шоколада" width={500} />
                </div>
                <p>
                    Добро пожаловать в мир искусства сладостей - настоящий рай
                    для любителей шоколада! В этом уникальном магазине шоколада
                    вы погрузитесь в чарующую атмосферу, где каждый шаг наполнен
                    изысканными ароматами и восхитительными вкусами. Неустанно
                    танцующие лучи шоколадного света воплощают ваши самые
                    сокровенные фантазии о нежных слияниях фруктовых и ореховых
                    нот с роскошной горечью темного шоколада.
                </p>
            </div>

            <div className={styles.block}>
                <p>
                    Пройдите по элегантным полкам, увлекающим вас в тропические
                    леса, где экзотические фрукты и свежие цветы рисуют свои
                    великолепные оттенки на покрытых золотым глазурью таблетках
                    шоколада. Каждый продукт сочно и соблазнительно окутывает
                    ваш вкусовой рецептор, позволяя вам окунуться в глубины
                    нектара божественного удовольствия.
                </p>
                <div>
                    <img
                        src={ChocoitemsJPEG}
                        alt="Магазин шоколада"
                        width={500}
                    />
                </div>
            </div>

            <div className={styles.block}>
                <div>
                    <img
                        src={ChocomanJPEG}
                        alt="Магазин шоколада"
                        width={500}
                    />
                </div>
                <p>
                    Наши эксперты по шоколаду тщательно отбирают только лучшие
                    сорта какао и ингредиенты, чтобы создавать великолепные
                    композиции, как произведения искусства. Все, что вы найдете
                    здесь, от роскошных шоколадных батончиков до изысканных
                    травяных шоколадных таблеток, нежно ласкает вашу душу и
                    подарит вам незабываемые впечатления.
                </p>
            </div>
        </div>
    );
};
