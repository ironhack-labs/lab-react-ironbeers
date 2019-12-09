import React, { Component } from 'react';
import Header from './Header';
import { load } from './../services/beer';
import './ListBeers.css';

import {
	BrowserRouter,
	Switch,
	Route,
	withRouter,
	Link
} from 'react-router-dom';

class ListBeers extends Component {
	constructor() {
		super();
		this.state = {
			beers: []
		};
	}

	componentDidMount() {
		load()
			.then(beers => {
				this.setState({
					beers
				});
			})
			.catch(error => {
				console.log(error);
				console.log('Error in service.');
			});
	}

	render() {
		const beerArray = this.state.beers;
		return (
			<div>
				<Header></Header>

				<div className="listBeersContainer">
					{beerArray && (
						<ul>
							{beerArray.map(beer => (
								<div className="smallContainer">
									<ul>
										<li>
											<img
												src={beer.image_url}
												alt=""
												style={{ width: '100px' }}
											/>
										</li>

										<Link to={`/singleBeer/${beer._id}`}>
											<li>{beer.name}</li>
										</Link>

										<li>{beer.tagline}</li>
										<li>{beer.contributed_by}</li>
									</ul>
								</div>
							))}
						</ul>
					)}
				</div>
			</div>
		);
	}
}

export default ListBeers;
