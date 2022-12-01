import axios from "axios";

class BeerService {
	constructor() {
		this.api = axios.create({
			baseURL: "https://ih-beers-api2.herokuapp.com/beers",
		});
	}

	getBeers() {
		return this.api.get("");
	}

	getOneBeer(beerId) {
		return this.api.get(`/${beerId}`);
	}

	getRandomBeer() {
		return this.api.get(`/random`);
	}

	saveBeer(beerData) {
		return this.api.post("/new", beerData);
	}

	getBeersByQuery(query) {
		return this.api.post(`/search?q={${query}}`);
	}
}

const beersService = new BeerService();

export default beersService;
