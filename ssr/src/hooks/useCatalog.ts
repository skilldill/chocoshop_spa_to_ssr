import { useSelector } from "@tramvai/state";
import { CatalogItemDto, ChocoDto } from "models/catalog.models";
import { CATALOG_STORE_NAME } from "store/catalog";

type UseCatalog = () => {
    catalog: CatalogItemDto[];
    current: ChocoDto | undefined;
    fetchCatalog: () => void;
    fetchCurrent: (id: string) => void;
};

export const useCatalog: UseCatalog = () => {
    const catalogState = useSelector([CATALOG_STORE_NAME], ({ catalog }) => catalog);

    return {
        catalog: catalogState.catalog,
        current: catalogState.current,
        fetchCatalog: () => {},
        fetchCurrent: () => {},
    }
}