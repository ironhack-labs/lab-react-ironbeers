import axios from 'axios';

const http = axios.create({

  baseURL: `${process.env.REACT_APP_API_URL}/beers`
});

const list = () => http.get('/')
const detail = (id) => http.get(`/${id}`)
const random = () => http.get('/random')
const search = (query) => http.get(`/search?q=${query}`)

export default { list, detail, random, search}