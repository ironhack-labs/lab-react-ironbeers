import axios from "axios";

const httpBeers = axios.create ({
    baseURL: "https://ih-beers-api2.herokuapp.com",

});

httpBeers.interceptors.response.use(
    (response) => response.data,
    (error) => {
        return Promise.reject(error);
    }
);

export default httpBeers;