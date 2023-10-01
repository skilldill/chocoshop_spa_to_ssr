import { createEvent, createReducer } from "@tramvai/state";
import { CatalogItemDto, ChocoDto } from "models/catalog.models";

export const CATALOG_STORE_NAME = 'catalog';

export type CatalogStore = {
    catalog: CatalogItemDto[];
    current: ChocoDto | undefined;
}

export const INITIAL_STATE: CatalogStore = {
    catalog: [],
    current: undefined,
}

export const setCatalogEvent = createEvent<CatalogItemDto[]>('setCatalogEvent');
export const setCurrentChoco = createEvent<ChocoDto>('setCurrentChoco');

export const catalogReducer = 
    createReducer(CATALOG_STORE_NAME, INITIAL_STATE)
    .on(setCatalogEvent, (state, payload) => ({ ...state, catalog: payload }))
    .on(setCurrentChoco, (state, payload) => ({ ...state, current: payload }));