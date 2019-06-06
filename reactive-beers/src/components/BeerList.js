import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Services from '../services/beer.services';
import BeerCard from './BeerCard';

class BeerList extends Component {
	constructor() {
		super();
		this.state = {
			beers: []
		};
		this.service = new Services();
	}

	componentDidMount() {
		this.service.getAllBeers().then((beers) => {
			//beers.splice(0, 50);
			this.setState({ beers: beers.splice(0, 50) });
		});
	}
	render() {
		return (
			<section>
				<Link className="home-nav" to="/">
					Home
				</Link>
				<div className="container">
					<h1>Beer List</h1>
					<div className="row beer-list">
						<ul>{this.state.beers.map((beer, i) => <BeerCard key={i} beer={beer} />)}</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default BeerList;
