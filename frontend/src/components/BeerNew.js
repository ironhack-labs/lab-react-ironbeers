import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import {Input, Button} from 'antd'

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
			this.props.history.push('/')
			console.log("res", res);
		} catch (err) {
			console.log("err", err);
		}
	};

	render() {
		return (
			<div style={{marginTop: '50px'}}>
				<Header />
				<form style={{width: '40%', height:'800px', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent:'space-evenly'}}>
					<div>
						<label htmlFor="name">Name</label>
						<Input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
					</div>
					<div>
						<label htmlFor="tagline">Tagline</label>
						<Input onChange={this.handleChange} type="text" name="tagline" value={this.state.tagline} />
					</div>
					<div>
						<label htmlFor="description">Desciption</label>
						<Input.TextArea onChange={this.handleChange} name="description" cols="30" rows="10" value={this.state.description} />
					</div>
					<div>
						<label htmlFor="first_brewed">First Brewed</label>
						<Input onChange={this.handleChange} type="text" name="first_brewed" value={this.state.first_brewed} />
					</div>
					<div>
						<label htmlFor="brewers_tips">Brewer Tips</label>
						<Input onChange={this.handleChange} type="text" name="brewers_tips" value={this.state.brewers_tips} />
					</div>
					<div>
						<label htmlFor="attenuation_level">Attenuation Level</label>
						<input onChange={this.handleChange} type='number' name="attenuation_level" value={this.state.attenuation_level} />
					</div>
					<div>
						<label htmlFor="contributed_by">Contributed By</label>
						<Input onChange={this.handleChange} type="text" name="contributed_by" value={this.state.contributed_by} />
					</div>
					<div>
						<Button type='primary' onClick={this.submit}>ADD NEW</Button>
					</div>
				</form>
			</div>
		);
	}
}
