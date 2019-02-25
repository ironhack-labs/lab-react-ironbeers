import axios from 'axios';

export default class AllBeersService {
	constructor() {
		this.service = axios.create({
			baseURL: 'https://ironbeer-api.herokuapp.com/beers'
		});
	}
	getBeer = () => {
		return this.service.get('/all').then((data) => data.data);
	};

	addNewBeer = (beer) => {
		return this.service.post('/new', { ...beer }).then((newBeer) => newBeer);
	};

	getOneBeer = (beer) => {
		return this.service.get(`/single/${beer}`).then((infoBeer) => infoBeer);
	};
	
	getRandomBeer = () => {
		return this.service.get(`/random`).then((randomBeer) => randomBeer);
	};
	
	searchBeer = (search) => {
		console.log(search);
		if (search === '') {
			return this.service.get('/all').then((data) => {
				return data.data;
			});
		} 
		else
			return this.service.get('/search?q=' + search).then((beersFiltred) => {
				console.log(beersFiltred.data);
				return beersFiltred.data;
			});
	};
}
