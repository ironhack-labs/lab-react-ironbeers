import axios from "axios";

class BeersApi {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_BEERS_URL}/beers` });
    };

    getAllBeers = async setBeers => {
        try {
            const { data } = await this.api.get("/");
            setBeers(await data);
        } catch (error) {
            console.error(`Error on getAllBeers => ${error.message}`, error.response);
            setBeers([{ statusText: error.response.statusText, status: error.response.status }]);
        };
    };

    getOneBeer = async (beerId, setBeer) => {
        try {
            const { data } = await this.api.get(`/${beerId}`);
            setBeer(await data);
        } catch (error) {
            console.error(`Error on getOneBeer => ${error.message}`, error.response);
            setBeer({ statusText: error.response.statusText, status: error.response.status });
        };
    };

    getRandomBeer = async setBeer => {
        try {
            const { data } = await this.api.get("/random");
            setBeer(await data);
        } catch (error) {
            console.error(`Error on getRandomBeer => ${error.message}`, error.response);
            setBeer({ statusText: error.response.statusText, status: error.response.status });
        };
    };

    postBeer = async newBeer => {
        try {
            const { data } = await this.api("/new", newBeer);
            return data;
        } catch (error) {
            console.error(`Error on postBeer => ${error.message}`, error.response);
            return { statusText: error.response.statusText, status: error.response.status };
        };
    };
};

export default new BeersApi();