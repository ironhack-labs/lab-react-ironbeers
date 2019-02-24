import axios from 'axios';

export default class AllBeersService {
	constructor() {
		this.service = axios.create({
			baseURL: 'https://ironbeer-api.herokuapp.com'
		});
	}
	getBeer = () => {
		return this.service.get('/beers/all').then((data) => {
			return data.data;
		});
	};

	addNewBeer = (beer) => {
		return this.service.post('/beers/new', { ...beer }).then((newBeer) => newBeer);
	};

	searchBeer = (search) => {
		console.log(search);
		if (search === '') {
			return this.service.get('/beers/all').then((data) => {
				return data.data;
			});
		} else
			return this.service.get('/beers/search?q=' + search).then((beersFiltred) => {
				console.log(beersFiltred.data);
				return beersFiltred.data;
			});
	};
}
