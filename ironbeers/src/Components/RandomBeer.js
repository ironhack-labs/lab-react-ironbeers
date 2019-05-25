import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

export default class RandomBeer extends Component {
	constructor() {
		super();
		this.state = {
			beer: {}
		};
	}

	componentDidMount() {
		axios
			.get('https://ih-beer-api.herokuapp.com/beers/random')
			.then((result) => {
				console.log(result.data);
				this.setState({ beer: result.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<Header />
				<div>
					<img src={this.state.beer.image_url} alt="beer" style={{ height: '120px' }} />
					<h1>{this.state.beer.name}</h1>
					<h3>{this.state.beer.tagline}</h3>
					<h4>{this.state.beer.first_brewed}</h4>
					<h4>{this.state.beer.attenuation_level}</h4>
					<h5>{this.state.beer.description}</h5>
					<p>{this.state.beer.contributed_by}</p>
				</div>
			</div>
		);
	}
}
