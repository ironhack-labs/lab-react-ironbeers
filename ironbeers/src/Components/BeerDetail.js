import React, { Component } from 'react';
import Header from './Header';

class BeerDetail extends Component {
	render() {
		console.log(this.props);

		return (
			<div>
				<Header />
				<div>
					<img src={this.props.location.state.beer.image_url} alt="beer" style={{ height: '120px' }} />
					<h1>{this.props.location.state.beer.name}</h1>
					<h3>{this.props.location.state.beer.tagline}</h3>
					<h4>{this.props.location.state.beer.first_brewed}</h4>
					<h4>{this.props.location.state.beer.attenuation_level}</h4>
					<h5>{this.props.location.state.beer.description}</h5>
					<p>{this.props.location.state.beer.contributed_by}</p>
				</div>
			</div>
		);
	}
}

export default BeerDetail;
