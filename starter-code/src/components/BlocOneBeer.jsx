import React, { Component } from 'react';
import '../stylesheets/OneBeer.css';

export class BlocOneBeer extends Component {
	render() {
		return (
			<article className="my-beer">
				<div className="picture">
					<img src={this.props.beer.image_url} alt={this.props.beer.name} />
				</div>
				<h1>{this.props.beer.name}</h1>
				<h2>{this.props.beer.attenuation_level}</h2>
				<p className="tag">{this.props.beer.tagline}</p>
				<strong>{this.props.beer.first_brewed}</strong>
				<p className="description">{this.props.beer.description}</p>
				<em>{this.props.beer.contributed_by}</em>
			</article>
		);
	}
}

export default BlocOneBeer;
