import React, { Component } from 'react';
import Navbar from './Navbar';
import AllBeersService from '../service/AllBeersService';
import './RandomBeer.css';

class BeerDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.AllBeersService = new AllBeersService();
		this.getBeer();
	}

	// const country = countries.find((country) => {
	//     return country.cca3 === this.props.match.params.cca3;
	// });

	getBeer = () => {
		this.AllBeersService
			.getBeer()
			.then((birras) => {
				const birraDetail = birras.find((birra) => {
					return birra._id === this.props.match.params._id;
				});
				this.setState(birraDetail);
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<Navbar />

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
