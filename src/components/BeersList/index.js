import React, { Component } from 'react';
import Navbar from './../Navbar';

export default class BeerList extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	beerList = async () => {
		try {
			const response = await this.props.getAllBeers();
			console.log(response);
			return await response.data.map((beer, index) => {
				console.log(beer);
				return (
					<div key={index}>
						<h2>{beer.name}</h2>
						<h3>{beer.tagline}</h3>
						<p>{beer.tagline}</p>
					</div>
				);
			});
		} catch (error) {
			return <h2>Something happend</h2>;
		}

		// this.props.getAllBeers().then((result) => {
		// 	let resultArray = result.data.map((beer, index) => {
		// 		console.log(beer);
		// 		return (
		// 			// <h3>hello</h3	>
		// 			<div key={index}>
		// 				<h2>{beer.name}</h2>
		// 				<h3>{beer.tagline}</h3>
		// 				<p>{beer.tagline}</p>
		// 			</div>
		// 		);
		// 	});
		// });
	};

	render() {
		return (
			<div>
				<Navbar />
				{this.beerList()}
			</div>
		);
	}
}
