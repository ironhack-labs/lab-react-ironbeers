import http from "./baseService";

export const listBeers = () => {
    return http.get("https://ih-beers-api2.herokuapp.com/beers");
};

export const listSinleBeer = (id) => {
    return http.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
};

export const addNewBeer = () => {
    return http.post(`https://ih-beers-api2.herokuapp.com/beers/new`);
};

export const searchBeer = (query) => {
    return http.post(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
}