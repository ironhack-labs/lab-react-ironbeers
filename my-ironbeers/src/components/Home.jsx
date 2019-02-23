import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	// state = {
	// 	beers: [ ...API ]
	// };

	render() {
		return (
			<div className="allbeers">
				<div>AllBeers</div>
				<Link to="/beers">All Beers</Link>
				<div>One Beers</div>
				<Link to="/new-beer">New Beer</Link>
				<div>Random Beer</div>
				<Link to="/random-beer">Random Beer</Link>
			</div>
		);
	}
}

export default Home;
