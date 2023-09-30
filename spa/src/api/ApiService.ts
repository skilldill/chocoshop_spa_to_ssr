import axios from 'axios';
import { CatalogItemDto, ChocoDto } from '../models/catalog.models';

const http = axios.create({
    baseURL: '/api',
});

export class ApiService {
    static fetchCatalog(): Promise<{ data: CatalogItemDto[] }> {
        return http.get('/catalog');
    }

    static fetchCurrent(id: string): Promise<{ data: ChocoDto }> {
        return http.get('/catalog/' + id);
    }
}
