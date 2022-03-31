import http from "./baseService";

export const listBeers = () => {
    return http.get("https://ih-beers-api2.herokuapp.com/beers")
};