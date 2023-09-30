import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { CatalogContext } from './context';
import { CatalogItemDto, ChocoDto } from '../../models/catalog.models';
import { ApiService } from '../../api/ApiService';

export const CatalogContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [catalog, setCatalog] = useState<CatalogItemDto[]>([]);
    const [current, setCurrent] = useState<ChocoDto>();

    const fetchCatalog = async () => {
        try {
            const { data } = await ApiService.fetchCatalog();
            setCatalog(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchCurrent = async (id: string) => {
        setCurrent(undefined);

        try {
            const { data } = await ApiService.fetchCurrent(id);
            setCurrent(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCatalog();
    }, []);

    const value = {
        catalog,
        current,
        fetchCatalog,
        fetchCurrent,
    };

    return (
        <CatalogContext.Provider value={value}>
            {children}
        </CatalogContext.Provider>
    );
};
