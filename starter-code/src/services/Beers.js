import axios from 'axios';

const http = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' });

const list = () => http.get('/').then(res => res.data);
const detail = (id) => http.get(`/${id}`).then(res => res.data);
const random = () => http.get(`/random`).then(res => res.data);
const add = (beer) => http.post(`/new`, beer).then(res => res.data);
const search = (query) => http.get(`/search?q=${query}`).then(res => res.data);

export default {
	detail, list, random, add, search
}