import axios from 'axios';

export default class AllBeersService {
	constructor() {
		this.service = axios.create({
			baseURL: 'https://ironbeer-api.herokuapp.com'
		});
	}
	getBeer = () => {
		return this.service.get('/beers/all').then((data) => {
			console.log(data.data);
			return data.data;
		});
	};
}
