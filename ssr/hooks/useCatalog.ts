import { CatalogItemDto, ChocoDto } from "models/catalog.models";

type UseCatalog = () => {
    catalog: CatalogItemDto[];
    current: ChocoDto | undefined;
    fetchCatalog: () => void;
    fetchCurrent: (id: string) => void;
};

export const useCatalog: UseCatalog = () => {
    return {
        catalog: [],
        current: undefined,
        fetchCatalog: () => {},
        fetchCurrent: () => {},
    }
}