import axios from "axios";

export default class Service{
    constructor(){

        this.service = axios.create({
            baseURL: "https://ironbeer-api.herokuapp.com/"
        })
    }

    allBeers = () => {
        return this.service.get("beers/all")
        .then(res => {
            return res.data
        })
        .catch( err => {
            console.log(err)
        })
    }

    postPepe = (loquevamosaenviaralback) => {
        const promise = this.service.post("postBack", {loquevamosaenviaralback})
        .then(res => {
            console.log(res);
            return res.data;
        })

        return promise;
    }
}