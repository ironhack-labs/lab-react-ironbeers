import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewBeer extends Component {
	constructor() {
		super();
		this.state = {};
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
					<h1>New Beer</h1>
					<div className="row beer-list" />
				</div>
			</section>
		);
	}
}

export default NewBeer;
