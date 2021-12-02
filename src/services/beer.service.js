import axios from 'axios'

class BeerApiService {

	constructor() {
		this.axiosApp = axios.create({
			baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
		})
	}

	getAllBeers = () => this.axiosApp.get('/')
	getOneBeer = (id) => this.axiosApp.get(`/${id}`)
	getRandomBeer = () => this.axiosApp.get('/random')
}

export default BeerApiService