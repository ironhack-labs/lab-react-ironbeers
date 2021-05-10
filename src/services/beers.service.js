import axios from 'axios';

export default class BeersService {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
      
    });
  }

  create = (data) => this.instance.post('/new', data);
  get = () => this.instance.get('/');
  getOne = (id) => this.instance.get(`/${id}`);
  getRandom = () => this.instance.get(`/random`);
  search = (query) => this.instance.get(`/search?q=${query}`);
}
