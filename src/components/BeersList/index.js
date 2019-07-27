import React, { Component } from 'react';
import Navbar from './../Navbar';
import { Link } from 'react-router-dom';

export default class BeerList extends Component {
	beerList = () => {
		return this.props.beers.map((eachB) => {
			return (
				<div key={eachB._id} className="each-beer">
					<img src={eachB.image_url} alt="beerpic" />
					<div className="beer-desc">
						<Link to={`/beers/${eachB._id}`} className="homelink">
							<h1>{eachB.name}</h1>
						</Link>
						<h4>{eachB.tagline}</h4>
						<p>{eachB.description}</p>
					</div>
				</div>
			);
		});
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
