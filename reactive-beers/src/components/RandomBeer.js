import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RandomBeer extends Component {
	constructor() {
		super();
		this.state = {
			beers: []
		};
		//	this.service = new Services();
	}

	componentDidMount() {}
	render() {
		return (
			<section>
				<Link className="home-nav" to="/">
					Home
				</Link>
				<div className="container">
					<h1>Random Beer</h1>
					<div className="row" />
				</div>
			</section>
		);
	}
}

export default RandomBeer;
