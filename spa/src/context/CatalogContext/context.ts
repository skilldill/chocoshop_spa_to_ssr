import { createContext } from 'react';
import { CatalogItemDto, ChocoDto } from '../../models/catalog.models';

type CatalogContextModel = {
    catalog: CatalogItemDto[];
    current: ChocoDto | undefined;
    fetchCatalog: () => void;
    fetchCurrent: (id: string) => void;
};

export const CatalogContext = createContext<CatalogContextModel>({
    catalog: [],
    current: undefined,
    fetchCatalog: () => {},
    fetchCurrent: () => {},
});
