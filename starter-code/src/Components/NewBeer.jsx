import React, { Component } from 'react';
import Header from './Header';
import { addBeer } from './../services/beer';

import {
	BrowserRouter,
	Switch,
	Route,
	withRouter,
	Link
} from 'react-router-dom';

class NewBeer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			tagline: '',
			description: '',
			first_brewed: '',
			attenuation_level: '',
			contributed_by: ''
		};
		this.myChangeHandler = this.myChangeHandler.bind(this);
		this.addBeerToList = this.addBeerToList.bind(this);
	}

	myChangeHandler = event => {
		// when you use an arrow function, you also bind, but you shouldn't do it like this, keep binding in your constructor
		const name = event.target.name; // target ALL the names from the form it is connected to
		const value = event.target.value; // same thing as above, but for the values
		this.setState({
			[name]: value // [name] with square braces takes into account every possible name input
		});
	};

	addBeerToList(event) {
		event.preventDefault();
		console.log(this.state);
		addBeer(this.state);
	}

	render() {
		return (
			<div>
				<Header></Header>
				<form onSubmit={this.addBeerToList}>
					<h1>Hello</h1>
					<p>Enter your name:</p>
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.myChangeHandler}
					/>

					<p>Enter your tagline:</p>
					<input
						type="text"
						name="tagline"
						value={this.state.tagline}
						onChange={this.myChangeHandler}
					/>

					<p>Enter your description:</p>
					<input
						type="text"
						name="description"
						value={this.state.description}
						onChange={this.myChangeHandler}
					/>

					<p>First Brewed:</p>
					<input
						type="text"
						name="first_brewed"
						value4={this.state.first_brewed}
						onChange={this.myChangeHandler}
					/>

					<p>Attenuation Level:</p>
					<input
						type="number"
						name="attenuation_level"
						value={this.state.attenuation_level}
						onChange={this.myChangeHandler}
					/>

					<p>Contributed by:</p>
					<input
						type="text"
						name="contributed_by"
						value={this.state.contributed_by}
						onChange={this.myChangeHandler}
					/>

					<input type="submit" value="submit" className="btn" />
				</form>
			</div>
		);
	}
}

export default NewBeer;
