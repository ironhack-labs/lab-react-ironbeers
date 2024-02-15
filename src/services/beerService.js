import httpBeers from "./baseBeersServices";

export const getBeerDetail = (id) => {
    return httpBeers.get(`/${id}`);
    }
