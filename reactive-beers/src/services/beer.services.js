import axios from 'axios';

export default class Services {
	constructor() {
		this.service = axios.create({
			baseURL: 'https://ih-beer-api.herokuapp.com/beers'
		});
	}

	getAllBeers = () => {
		return this.service.get('/').then((response) => response.data);
	};
	getBeer = (id) => {
		return this.service.get(`/${id}`).then((response) => response.data);
	};
	getRandomBeer = () => {
		return this.service.get(`/random`).then((response) => response.data);
	};
	createBeer = (beer) => {
		return this.service.post('/new', beer).then((response) => response.data);
	};
}
