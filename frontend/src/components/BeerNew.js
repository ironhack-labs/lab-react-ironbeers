import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

export default class BeerNew extends Component {
	state = {
		name: "",
		tagline: "",
		description: "",
		first_brewed: "",
		brewers_tips: "",
		attenuation_level: 0,
		contributed_by: ""
	};

	handleChange = e => {
		const {
			target: { name, value }
		} = e;
		this.setState({ [name]: value });
	};

	submit = async e => {
		e.preventDefault();

		try {
			const res = await axios.post("https://ih-beer-api.herokuapp.com/beers/new", { ...this.state });
			console.log("res", res);
		} catch (err) {
			console.log("err", err);
		}
	};

	render() {
		return (
			<div style={{marginTop: '50px'}}>
				<Header />
				<form onSubmit={this.submit}>
					<div>
						<label htmlFor="name">Name</label>
						<input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
					</div>
					<div>
						<label htmlFor="tagline">Tagline</label>
						<input onChange={this.handleChange} type="text" name="tagline" value={this.state.tagline} />
					</div>
					<div>
						<label htmlFor="description">Desciption</label>
						<textarea onChange={this.handleChange} name="description" cols="30" rows="10" value={this.state.description} />
					</div>
					<div>
						<label htmlFor="first_brewed">First Brewed</label>
						<input onChange={this.handleChange} type="text" name="first_brewed" value={this.state.first_brewed} />
					</div>
					<div>
						<label htmlFor="brewers_tips">Brewer Tips</label>
						<input onChange={this.handleChange} type="text" name="brewers_tips" value={this.state.brewers_tips} />
					</div>
					<div>
						<label htmlFor="attenuation_level">Attenuation Level</label>
						<input onChange={this.handleChange} type="number" name="attenuation_level" value={this.state.attenuation_level} />
					</div>
					<div>
						<label htmlFor="contributed_by">Contributed By</label>
						<input onChange={this.handleChange} type="text" name="contributed_by" value={this.state.contributed_by} />
					</div>
					<div>
						<input type="submit" value="ADD NEW" />
					</div>
				</form>
			</div>
		);
	}
}
