import axios from 'axios'

export default class Services {
	constructor() {
		this.service = axios.create({
			baseURL: 'https://ih-beer-api.herokuapp.com/beers'
		})
	}

	getBeers = () => this.service.get('/')
	getOneBeer = id => this.service.get(`/${id}`)
	getRandomBeer = () => this.service.get('/random')
	createNewBeer = theNewBeer => this.service.post(`/new`, theNewBeer)
	searchBeers = query => this.service.get(`/search?q=${query}`)
}
