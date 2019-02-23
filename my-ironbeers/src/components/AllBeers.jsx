import React, { Component } from 'react';
import AllBeersService from '../service/AllBeersService';
import Navbar from './Navbar';
import './AllBeers.css';
import { NavLink } from 'react-router-dom';

class AllBeers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beers: []
		};

		this.AllBeersService = new AllBeersService();
		this.getBeer();
	}

	getBeer = () => {
		this.AllBeersService
			.getBeer()
			.then((birras) => {
				this.setState({ ...this.state, beers: birras });
			})
			.catch((err) => console.log(err));
	};

	render() {
		return this.state.beers ? (
			<div>
				<Navbar />

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
