import React, { Component } from 'react';
import Beers from '../../services/Beers';
import './BeerList.css';
import { Link } from 'react-router-dom';

export default class BeerList extends Component {
	state = {
		beers: [],
		error: undefined
	}

	componentDidMount() {
		Beers.list().then(
			beers => this.setState({ beers: beers, error: undefined })
		).catch(
			error => this.setState({ error: error })
		);
	}

	render() {
		const beers = this.state.beers.map((beer, index) =>
			<Link to={`/beers/${beer._id}`} className='beer' key={index}>
				<img src={beer.image_url} alt='Beer' />
				<div className='beer-data'>
					<p className='name'>{beer.name}</p>
					<p className='tagline'>{beer.tagline}</p>
					<p className='contributor'>Created by: {beer.contributed_by}</p>
				</div>
			</Link>
		);
		return (
			<div className='beer-list'>
				{beers}
			</div>
		)
	}
}