import React, { Component } from 'react';
import AllBeersService from '../service/AllBeersService';
import { Redirect } from 'react-router-dom';

class NewBeer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beers: [],
			redirect: false
		};
		this.allBeersService = new AllBeersService();
	}

	handlerChange = (e) => {
		let inputName = e.target.name;
		let inputValue = e.target.value;
		this.setState({ ...this.state, [inputName]: inputValue });
	};
	handlerSubmit = (e) => {
		e.preventDefault();
		let { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;

		this.allBeersService.addNewBeer({ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
		.then((response) => {
			this.setState({...this.state, redirect: true});
		});
	};

	render() {
		return (
			<form className="form-beer" onSubmit={this.handlerSubmit}>
				<input type="text" placeholder="Beer's Name" name="name" onChange={(e) => this.handlerChange(e)} />
				<input
					type="text"
					placeholder="Beer's Tagline"
					name="tagline"
					onChange={(e) => this.handlerChange(e)}
				/>
				<textarea
					type="text"
					placeholder="Beer's Description"
					name="description"
					onChange={(e) => this.handlerChange(e)}
				/>
				<input
					type="text"
					placeholder="Beer's First Brewed"
					name="first_brewed"
					onChange={(e) => this.handlerChange(e)}
				/>

				<input
					type="text"
					placeholder="Beer's Brewer Tips"
					name="brewers_tips"
					onChange={(e) => this.handlerChange(e)}
				/>
				<input
					type="text"
					placeholder="Beer's Attenuation Level"
					name="attenuation_level"
					onChange={(e) => this.handlerChange(e)}
				/>

				<input
					type="text"
					placeholder="Contributed by:"
					name="contributed_by"
					onChange={(e) => this.handlerChange(e)}
				/>
				<input type="submit" value="Add Beer" />
				{this.state.redirect ? <Redirect to="/beers" /> : ''}
			</form>
		);
	}
}

export default NewBeer;
