import axios from 'axios';

export default class BeersService{
    constructor(){
        this.instance = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
        })
    }


get = () => this.instance.get("/");
// getOne = id => this.instance.get(`/${id}`);
}
