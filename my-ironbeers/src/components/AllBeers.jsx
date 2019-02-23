import React, { Component } from 'react';
import AllBeersService from '../service/AllBeersService';
import Navbar from './Navbar';
import './AllBeers.css';
import { NavLink } from 'react-router-dom';
import SearchBar from './searchBar';

class AllBeers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beers: []
		};

		this.AllBeersService = new AllBeersService();
		this.getBeer();
	}

	getBeer = (mysearch) => {
		console.log(mysearch);
		this.AllBeersService
			.getBeer()
			.then((birras) => {
				if (mysearch === undefined) {
					this.setState({ ...this.state, beers: birras });
				} else {
					const birrasSearch = birras.filter((birra) => birra.name === mysearch);
					console.log(birrasSearch);
					this.setState({ ...this.state, beers: birrasSearch });
				}
			})
			.catch((err) => console.log(err));
	};

	// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

	// const result = words.filter(word => word.length > 6);

	filterBeer = (mysearch) => {
		const newState = { ...this.state };

		newState.beers = newState.beers.filter((birra) => {
			return birra.name.indexOf(mysearch) === 0;
		});
		console.log(newState);
		this.setState(newState);
	};

	render() {
		return this.state.beers ? (
			<div>
				<Navbar />
				<SearchBar FilterName={this.getBeer} />

				{this.state.beers.map((birra) => (
					<NavLink className="all-beers" to={`/beers/${birra._id}`} key={birra._id}>
						<div>
							<img src={birra.image_url} alt="beer" />
						</div>
						<div className="beer-text">
							{birra.name}
							{birra.tagline}
							<div>
								<p>Created by: {birra.contributed_by}</p>
							</div>
						</div>
					</NavLink>
				))}
			</div>
		) : (
			<p>Loading</p>
		);
	}
}

export default AllBeers;
