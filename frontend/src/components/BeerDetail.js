import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import {Card} from 'antd'

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
			<div style={{ marginTop: "60px", display:'flex', justifyContent: 'center' }}>
				<Header />
				<Card style={{ width: '30%', display:'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
					<div>
						<img width='300px' src={image_url} alt={name} />
					</div>
					<div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
						<h1>{name}</h1>
						<span>{attenuation_level}</span>
					</div>
					<div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
						<span>{tagline}</span>
						<span>{first_brewed}</span>
					</div>
					<div style={{ display:'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '20px'}}>
						<p style={{textAlign: 'left'}}>{description}</p>
					</div>
					<div style={{ display:'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px'}}>
						<small>{contributed_by}</small>
					</div>
				</Card>
			</div>
		);
	}
}
