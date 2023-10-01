import express from 'express';
import { config } from 'dotenv';
import { DATA } from './data';

config();

const PORT = process.env.API_PORT || 4000;

const api = express();
api.use(express.json());
api.use(express.static('public'));
api.use(express.static('files'));

api.listen(PORT, () => {
    console.log('API STARTED ON ' + PORT);
});

api.get('/api/catalog', (_, res) => {
    const catalogData = DATA.map(( chocoItem ) => {
        const { description, ...catalogItem } = chocoItem;
        return catalogItem;
    });

    return res.send(catalogData);
});

api.get('/api/catalog/:id', (req, res) => {
    const { params } = req;
    const foundData = DATA.find(({ id }) => params.id === id);

    if (!foundData)
        return res.send(res.status(404));
    
    // setTimeout(() => {
    //     res.send(foundData);
    // }, 3000)
    res.send(foundData);
});
