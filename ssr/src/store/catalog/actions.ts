import { declareAction } from "@tramvai/core";
import { ENV_MANAGER_TOKEN } from "@tramvai/module-common";
import { HTTP_CLIENT } from "@tramvai/module-http-client";
import { CatalogItemDto, ChocoDto } from "models/catalog.models";
import { setCatalogEvent, setCurrentChoco } from "./reducer";
import { PAGE_SERVICE_TOKEN } from "@tramvai/tokens-router";

export const fetchCatalogAction = declareAction({
    name: 'fetchCatalogAction',
    async fn() {
        const apiUrl = this.deps.env.get('API_URL');
        
        const { payload } = await this.deps.http.get<CatalogItemDto[]>(apiUrl + '/catalog');
        
        this.dispatch(setCatalogEvent(payload));
    },
    deps: {
        http: HTTP_CLIENT,
        env: ENV_MANAGER_TOKEN,
    },
    conditions: {
        onlyServer: true,
    }
});

export const fetchCurrentChocoAction = declareAction({
    name: 'fetchCurrentChocoAction',
    async fn() {
        const apiUrl = this.deps.env.get('API_URL');
        const { params } = this.deps.pageService.getCurrentRoute();
        const { id } = params;

        const { payload } = await this.deps.http.get<ChocoDto>(apiUrl + '/catalog/' + id);
        
        this.dispatch(setCurrentChoco(payload));
    },
    deps: {
        http: HTTP_CLIENT,
        pageService: PAGE_SERVICE_TOKEN,
        env: ENV_MANAGER_TOKEN,
    },
    conditions: {
        onlyServer: true,
    }
});
