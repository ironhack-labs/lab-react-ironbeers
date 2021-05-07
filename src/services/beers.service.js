import axios from 'axios';

export default class BeersService{
    constructor(){
        this.instance = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
        })
    }
    getAll = () => this.instance.get("/");
    getOne = (id) => this.instance.get(`/${id}`);
    getRandom = () => this.instance.get("/random");
    create = data => this.instance.post("/new", data);
    search = (name) => this.instance.get(`/search?q=${name}`);
}