import axios from "axios";


const apiBeer = axios.create({
    baseURL: 'https://beers-api.edu.ironhack.com/'
});

apiBeer.interceptors.response.use(
    (response) => response.data, 
    (error) => {
        console.info('API error:', 
        {
            message: error.message,
            status: error.response?.status,
        });

        return Promise.reject(error);
    }
);

export async function getListBeers() {
    return await apiBeer.get('/beers');
}

export async function getBeerId(id) {
    return await apiBeer.get(`/beers/${ id }`);
}

export async function getRandomBeer() {
    return await apiBeer.get('/beers/random');
}

export async function setBeerNew(data) {
    return await apiBeer.post(
        '/beers/new', 
        data,
    );
}