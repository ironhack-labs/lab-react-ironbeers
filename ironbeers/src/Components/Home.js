import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Beers from './Beers';
// import NewBeer from './NewBeer';
// import RandomBeer from './RandomBeer';
import BeerImage from '../img/beers.png';
import NewBeerImage from '../img/new-beer.png';
import RandomBeerImage from '../img/random-beer.png';
import Header from './Header';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<img src={BeerImage} alt="beers" />
					<br />
					<Link to="/beers">Beers</Link>
					<p>I love beer</p>
				</div>
				<div>
					<img src={NewBeerImage} alt="beers" />
					<br />
					<Link to="/new-beer">New beers</Link>
					<p>New better even better</p>
				</div>
				<div>
					<img src={RandomBeerImage} alt="beers" />
					<br />
					<Link to="/random-beer">Random beer</Link>
					<p>Random beer not so nice</p>
				</div>
			</div>
		);
	}
}
