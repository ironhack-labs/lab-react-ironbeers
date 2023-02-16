import _api from './api'

const getAllBeers = () => _api.get('/beers');

const getBeerById = (id) => _api.get(`/beers/${id}`);

const createNewBeer = (data) => _api.post('/beers/new',data);


export {
    getAllBeers,
    getBeerById,
    createNewBeer
}