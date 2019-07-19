import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

export default class BeerDetail extends Component {
	state = {
		beer: {}
	};
	async componentDidMount() {
		console.log("this.props", this.props);
		let { idBeer } = this.props.match.params;
		if (!idBeer) idBeer = "random";

		try {
			const { data } = await axios.get(`https://ih-beer-api.herokuapp.com/beers/${idBeer}`);

			this.setState({ beer: data });
			console.log("this.state.beer", this.state.beer);
		} catch (err) {
			console.log("err", err);
		}
	}
	render() {
		const { image_url, name, attenuation_level, tagline, first_brewed, description, contributed_by } = this.state.beer;
		return (
			<div>
				<Header />
				<div>
					<div>
						<img src={image_url} alt={name} />
					</div>
					<div>
						<h1>{name}</h1>
						<span>{attenuation_level}</span>
					</div>
					<div>
						<span>{tagline}</span>
						<span>{first_brewed}</span>
					</div>
					<div>
						<p>{description}</p>
					</div>
					<div>
						<small>{contributed_by}</small>
					</div>
				</div>
			</div>
		);
	}
}
