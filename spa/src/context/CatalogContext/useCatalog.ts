import { useContext } from 'react';
import { CatalogContext } from './context';

export const useCatalog = () => useContext(CatalogContext);
