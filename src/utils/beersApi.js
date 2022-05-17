import axios from "axios";

class BeersApi {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_BEERS_URL}/beers` });
    };

    getAllBeers = async () => {
        try {
            const { data } = await this.api.get("/");
            return data;
        } catch (error) {console.error(`Error on getAllBeers => ${error.message}`, error.response.data)};
    };
};

export default new BeersApi();