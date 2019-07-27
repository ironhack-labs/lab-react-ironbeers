import React, { Component } from 'react';

export default class SingleBeer extends Component {
	render() {
		const singleBeer = this.props.beers.find((beer) => {
			return beer._id === this.props.match.params.id;
		});
		if (this.props.ready)
			return (
				<div className="each-beer">
					<img src={singleBeer.image_url} alt="beerpic" />
					<div className="line">
						<h1>{singleBeer.name}</h1>
						<h1>{singleBeer.attenuation_level}</h1>
					</div>
					<div className="line">
						<h4 className="prop">{singleBeer.tagline}</h4>
						<h5>{singleBeer.first_brewed}</h5>
					</div>
					<p>{singleBeer.description}</p>
					<p>{singleBeer.contributed_by}</p>
				</div>
			);
		else return <h1>loading</h1>;
	}
}
