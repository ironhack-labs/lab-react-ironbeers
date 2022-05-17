import axios from "axios";

class BeersApi {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_BEERS_URL}/beers` });
    };

    getAllBeers = async setBeers => {
        try {
            const { data } = await this.api.get("/");
            setBeers(await data);
        } catch (error) {console.error(`Error on getAllBeers => ${error.message}`, error.response)};
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
};

export default new BeersApi();