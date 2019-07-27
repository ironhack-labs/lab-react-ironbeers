import React, { Component } from 'react';

export default class RandomBeer extends Component {
	render() {
		let randomBeer = [...this.props.beers][
			Math.floor(Math.random() * this.props.beers.length)
		];
		if (this.props.ready) {
			return (
				<div className="each-beer">
					<img src={randomBeer.image_url} alt="beerpic" />
					<div className="line">
						<h1>{randomBeer.name}</h1>
						<h1>{randomBeer.attenuation_level}</h1>
					</div>
					<div className="line">
						<h4 className="prop">{randomBeer.tagline}</h4>
						<h5>{randomBeer.first_brewed}</h5>
					</div>
					<p>{randomBeer.description}</p>
					<p>{randomBeer.contributed_by}</p>
				</div>
			);
		} else {
			return <h1>loading</h1>;
		}
	}
}
