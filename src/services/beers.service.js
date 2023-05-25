import axios from 'axios'


class IronBears {

    constructor() {
        this.api = axios.create({
            baseUrl: "https://ih-beers-api2.herokuapp.com/beers"
        })
    }

    getAllBears() {
        return this.api.get('/')
    }
}
const ironService = new IronBears()

export default ironService


