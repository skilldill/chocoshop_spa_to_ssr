import { FC, useEffect } from 'react';
import styles from './ChocoPage.module.css';
import { useCatalog } from '../../../../hooks/useCatalog';
import { useRoute } from '@tramvai/module-router';

const ChocoPage: FC = () => {
    const { fetchCurrent, current } = useCatalog();
    const { params } = useRoute();
    const { id } = params;

    useEffect(() => {
        if (id) fetchCurrent(id);
    }, [id]);

    if (!current)
        return (
            <div className="page">
                <h2>Получаем данные о шоколаде...</h2>
            </div>
        );

    const { name, description, image, price, weight } = current;

    return (
        <div className="page">
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.content}>
                <div className={styles.poster}>
                    <img
                        src={'http://localhost:5000/' + image}
                        alt={name}
                        height="100%"
                    />
                </div>

                <div className={styles.description}>
                    <h2>Описание</h2>
                    <p>{description}</p>
                    <h2>Цена</h2>
                    <p>{price} руб</p>
                    <h2>Масса</h2>
                    <p>{weight} г.</p>
                    <div>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChocoPage;