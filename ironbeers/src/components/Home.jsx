import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div className="home-container">
				<Link to="/beers">All Beers</Link>
				<Link to="/new-beer">New Beer</Link>
				<Link to="/random-beer">Random Beer</Link>
			</div>
		);
	}
}

export default Home;
