import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Navbar';
import axios from 'axios';

class Beers extends Component {
	state = {
		beers: []
	};

	async componentDidMount() {
		const beers = await axios('https://ih-beers-api2.herokuapp.com/beers');
		this.setState({ beers: beers.data });
	}

	render() {
		const { beers } = this.state;
		console.log(beers);
		return (
			<div className='list-group'>
				<Nav />
				{beers.map((beer, index) => (
					<Link
						to={`/beers/${beer._id}`}
						key={index}
						className='list-group-item list-group-item-action d-flex flex-row'
					>
						<div className='beer-img' style={{ marginRight: '30px' }}>
							<img src={beer.image_url} alt='some pic' style={{ height: '100px' }} />
						</div>
						<div className='beer-name'>
							<h6>{beer.name}</h6>
							<p>{beer.tagline}</p>
							<p>{beer.contributed_by}</p>
						</div>
					</Link>
				))}
			</div>
		);
	}
}

export default Beers;
