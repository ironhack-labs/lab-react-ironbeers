import React, {Component} from 'react';
import axios from 'axios';

class RandomBeer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			randomBeer: []
		};
	}

	componentDidMount() {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers/random')
			.then(beer => {
				console.log(beer);
				this.setState({
					isLoaded: true,
					randomBeer: beer.data
				});
			}, error => {
				this.setState({
					isLoaded: false,
					error
				});
			});
	}

	render() {
		console.log(this.state.randomBeer);
		return (
			<div>

			</div>
		);
	}
}

export default RandomBeer;