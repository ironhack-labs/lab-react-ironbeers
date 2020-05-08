import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import BlocOneBeer from '../components/BlocOneBeer';

class RandomBeer extends Component {
	state = { beer: null };

	componentDidMount() {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
			.then((APIResponse) => {
				this.setState({ beer: APIResponse.data });
			})
			.catch((error) => console.log(error));
	}

	render() {
		if (!this.state.beer) {
			return (
				<React.Fragment>
					<Header />
					<h1>Searching...</h1>
				</React.Fragment>
			);
		}
		return (
			<React.Fragment>
				<Header />
				<BlocOneBeer beer={this.state.beer} />
			</React.Fragment>
		);
	}
}

export default RandomBeer;
