import axios from "axios";

export default class service{
    constructor(){

        this.service = axios.create({
            baseURL: "https://ironbeer-api.herokuapp.com/"
        })
    }

    getBeers = () => {
        return this.service.get("beers/all")
        .then(res => {
            return res.data
        })
        .catch( err => {
            console.log(err)
        })
    }

}