import React, { Component } from 'react';
import beerService from '../beersService/beerService';
import Header from './header';

class BeerDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.beerService = new beerService();
		this.getBeers();
	}

	getBeers = () => {
		this.beerService
			.getBeers()
			.then((beers) => {
				const beerDetail = beers.find((beer) => {
					return beer._id === this.props.match.params._id;
				});

				this.setState(beerDetail);
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<div>
        <Header />
					<div>
						<img src={this.state.image_url} alt="beer" />
					</div>

					<div>
						<div>
							<div>{this.state.name}</div>
							<div>{this.state.attenuation_level}</div>
						</div>

						<div>
							<div>{this.state.tagline}</div>
							<div>{this.state.first_brewed}</div>
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
