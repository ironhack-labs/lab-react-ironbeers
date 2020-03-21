import axios from 'axios'

const axiosConfig = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com'
});

export const getAllBeers = async () => {
    const res = await axiosConfig.get('/beers');
    return res.data;
};