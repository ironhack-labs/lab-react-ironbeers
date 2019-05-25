import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Beers extends Component {
	constructor() {
		super();
		this.state = {
			beers: []
		};
	}

	componentDidMount() {
		axios
			.get('https://ih-beer-api.herokuapp.com/beers')
			.then((result) => {
				console.log(result.data);
				this.setState({ beers: result.data, loading: false });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		let beers;
		if (this.state.beers) {
			beers = this.state.beers.map((beer, i) => {
				return (
					<div key={i} className="d-flex">
						<Link
							to={{
								pathname: `beers/${beer._id}`,
								state: { beer }
							}}
						>
							<div>
								<img src={beer.image_url} alt="beer" style={{ height: '120px' }} />
							</div>
							<div className="d-flex">
								{beer.name}
								<br />
								{beer.tagline}
								<br />
								Created by: {beer.contributed_by}
							</div>
						</Link>
					</div>
				);
			});
		}

		return (
			<div>
				<Header />
				<div>{beers}</div>
			</div>
		);
	}
}
