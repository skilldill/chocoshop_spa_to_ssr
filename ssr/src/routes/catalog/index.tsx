import { CatalogCard } from '../../components/CatalogCard';
import styles from './CatalogPage.module.css';
import { useCatalog } from '../../hooks/useCatalog';
import { PageComponent } from '@tramvai/react';
import { fetchCatalogAction } from 'store/catalog/actions';

const CatalogPage: PageComponent = () => {
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

CatalogPage.actions = [fetchCatalogAction];

export default CatalogPage;
