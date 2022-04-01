import http from "./baseService";

export const listBeers = () => {
    return http.get("https://ih-beers-api2.herokuapp.com/beers");
};

export const listSingleBeer = (id) => {
    return http.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
};

export const randomBeer = () => {
    return http.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
};

export const addNewBeer = (data) => {
    return http.post(`https://ih-beers-api2.herokuapp.com/beers/new`, data);
};

export const searchBeer = (query) => {
    return http.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
}