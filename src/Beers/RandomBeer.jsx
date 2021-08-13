import React, { Component } from 'react';
import AllBeers from './AllBeers';
import axios from "axios";

class RandomBeer extends React.Component {
	state = {
		beers: [],
	};


	componentDidMount() {


		axios
			.get("https://ih-beers-api2.herokuapp.com/beers")
			.then((response) => {
				this.setState({
					beers: response.data,
				});
			})

			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="BeerPage">
				<div> check out this beer ! </div>
			<AllBeers beers={this.state.beers} />
			</div>
		);
	}
}


export default RandomBeer
