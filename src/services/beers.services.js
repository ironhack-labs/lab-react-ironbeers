import _api from './api'

const getAllBeers = () => {
    return _api.get('/beers');
};


export {
    getAllBeers
}