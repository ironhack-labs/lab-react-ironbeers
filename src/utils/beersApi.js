import axios from "axios";

class BeersApi {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_BEERS_URL}/beers` });
    };

    getAllBeers = async setBeers => {
        try {
            const { data } = await this.api.get("/");
            setBeers(await data);
        } catch (error) {console.error(`Error on getAllBeers => ${error.message}`, error.response.data)};
    };
};

export default new BeersApi();