import { FC } from 'react';
import { CatalogItemDto } from '../../models/catalog.models';
import styles from './CatalogCard.module.css';
import { Link } from '@tramvai/module-router';

type CatalogCardProps = CatalogItemDto;

export const CatalogCard: FC<CatalogCardProps> = (props) => {
    const { id, name, price, weight, image } = props;

    return (
        <div className={styles.card}>
            <img
                src={'http://localhost:5000/' + image}
                alt="Шоколад"
                width="100%"
            />
            <Link url={'/catalog/' + id}>
                <h3 className={styles.cardTitle}>{name}</h3>
            </Link>
            <p>Цена: {price}руб.</p>
            <p>Масса: {weight}г.</p>
            <button>В корзину</button>
        </div>
    );
};
