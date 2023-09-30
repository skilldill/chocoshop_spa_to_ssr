import { FC } from 'react';
import { useCatalog } from '../../context/CatalogContext/useCatalog';
import { CatalogCard } from '../../components/CatalogCard';
import styles from './CatalogPage.module.css';

export const CatalogPage: FC = () => {
    const { catalog } = useCatalog();

    return (
        <div className="page">
            <h1>Каталог</h1>
            <div className={styles.catalog}>
                {catalog.map((item) => (
                    <CatalogCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};
