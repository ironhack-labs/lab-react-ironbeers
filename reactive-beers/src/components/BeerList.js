import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerList extends Component {
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
					<h1>Beer List</h1>
					<div className="row beer-list" />
				</div>
			</section>
		);
	}
}

export default BeerList;
