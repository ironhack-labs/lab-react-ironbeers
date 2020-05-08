import React, { Component } from 'react';
import InputForm from './InputForm';
import axios from 'axios';
import '../stylesheets/CreateForm.css';
import { Redirect } from 'react-router-dom';

class CreateForm extends Component {
	state = {
		name: '',
		errorName: false,
		tagline: '',
		description: '',
		first_brewed: '',
		brewers_tips: '',
		attenuation_level: '',
		contributed_by: '',
		redirect: false,
	};
	handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			name: this.state.name,
			tagline: this.state.tagline,
			description: this.state.description,
			first_brewed: this.state.first_brewed,
			brewers_tips: this.state.brewers_tips,
			attenuation_level: this.state.attenuation_level === '' ? 0 : this.state.attenuation_level,
			contributed_by: this.state.contributed_by,
			confirmMessage: null,
		};

		if (data.name === '') {
			this.setState({ errorName: true });
			return;
		}

		axios
			.post('https://ih-beers-api2.herokuapp.com/beers/new', data)
			.then((APIResult) => {
				this.setState({ confirmMessage: 'Your beer was successfully added to the list !', redirect: true });
				this.props.history.push('/');
			})
			.catch((error) => console.log(error));
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		}
		if (this.state.confirmMessage) {
			return <p className="confirmMessage">{this.state.confirmMessage}</p>;
		} else {
			return (
				<form onSubmit={this.handleSubmit}>
					<InputForm
						name="name"
						label="Name"
						type="text"
						change={this.handleChange}
						value={this.state.name}
						class={this.state.errorName ? 'error' : null}
						placeholder={this.state.errorName ? 'You need to enter at least a name...' : null}
					/>
					<InputForm name="tagline" label="Tagline" type="text" change={this.handleChange} value={this.state.tagline} />
					<InputForm
						name="description"
						label="Description"
						type="textarea"
						change={this.handleChange}
						value={this.state.description}
					/>
					<InputForm
						name="first_brewed"
						label="First Brewed"
						type="text"
						change={this.handleChange}
						value={this.state.first_brewed}
					/>
					<InputForm
						name="brewers_tips"
						label="Brewers Tips"
						type="text"
						change={this.handleChange}
						value={this.state.brewers_tips}
					/>
					<InputForm
						name="attenuation_level"
						label="Attenuation Level"
						type="number"
						change={this.handleChange}
						value={this.state.attenuation_level}
					/>
					<InputForm
						name="contributed_by"
						label="Contributed By"
						type="text"
						change={this.handleChange}
						value={this.state.contributed_by}
					/>
					<button className="submit">Add new</button>
				</form>
			);
		}
	}
}

export default CreateForm;
