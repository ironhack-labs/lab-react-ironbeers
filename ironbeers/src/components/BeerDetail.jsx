import React, { Component } from 'react';
import Header from './Header';
import AllBeersService from '../service/AllBeersService';
import './RandomBeer.css';

class BeerDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.AllBeersService = new AllBeersService();
		this.getBeer();
	}

	getBeer = () => {
		this.AllBeersService.getOneBeer(this.props.match.params._id)
		.then((beer) => this.setState(beer.data))
		.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<Header />

				<div className="random-beer">
					<div>
						<img src={this.state.image_url} alt="beer" />
					</div>

					<div className="random-text">
						<div>
							<div className="random-name">{this.state.name}</div>
							<div className="random-level">{this.state.attenuation_level}</div>
						</div>

						<div>
							<div className="random-tag">{this.state.tagline}</div>
							<div className="random-brewed">{this.state.first_brewed}</div>
						</div>

						<div>
							{this.state.description}
							{this.state.contributed_by}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BeerDetail;
