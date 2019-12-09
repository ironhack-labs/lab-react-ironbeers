import React, { Component } from 'react';
import Header from './Header';
import { loadRandomBeer } from './../services/beer';
import { Link } from 'react-router-dom';

import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

export class RandomBeer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beer: ''
		};
	}
	componentDidMount() {
		console.log(this.props);
		loadRandomBeer(this.props.match.params)
			.then(beer => {
				this.setState({
					beer
				});
			})
			.catch(error => {
				console.log(error);
				console.log('Error in service.');
			});
	}

	render() {
		return (
			<div>
				<Header />
				<ul>
					<li>
						<img
							src={this.state.beer.image_url}
							alt=""
							style={{ width: '15%', height: '15%' }}
						/>
					</li>
					<li>{this.state.beer.tagline}</li>
					<li>
						<Link exact to={`/single-beer/${this.state.beer._id}`}>
							{this.state.beer.name}
						</Link>
					</li>
					<li>{this.state.beer.contributed_by}</li>
				</ul>
			</div>
		);
	}
}

export default RandomBeer;
