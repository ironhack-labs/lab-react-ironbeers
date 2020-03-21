import axios from 'axios'

const request = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
});

export const getAllBeers = async () => {
    const res = await request.get('/');
    return res.data;
};

export const getBeer = async (id) => {
    const res = await request.get(`/${id}`);
    return res.data;
};

export const getRandomBeer = async () => {
    const res = await request.get('/random');
    return res.data;
}