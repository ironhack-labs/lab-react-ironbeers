import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Services from '../services/beer.services';

class NewBeer extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			tagline: '',
			description: '',
			first_brewed: '',
			brewers_tips: '',
			attenuation_level: 0,
			contributed_by: ''
		};
		this.message = '';

		this.service = new Services();
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.service.createBeer(this.state).then((message) => {
			console.log(message);
			this.message = message;
		});
	};

	componentDidMount() {}
	render() {
		return (
			<section>
				<Link className="home-nav" to="/">
					Home
				</Link>
				<div className="container">
					<h1>New Beer</h1>

					<p>{this.message}</p>
					<form onSubmit={this.handleSubmit}>
						<label>
							Name
							<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
						</label>
						<label>
							Tagline
							<input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange} />
						</label>
						<label>
							Description
							<input
								type="text"
								name="description"
								value={this.state.description}
								onChange={this.handleChange}
							/>
						</label>
						<label>
							First brewed
							<input
								type="text"
								name="first_brewed"
								value={this.state.first_brewed}
								onChange={this.handleChange}
							/>
						</label>
						<label>
							Brewers tips
							<input
								type="text"
								name="brewers_tips"
								value={this.state.brewers_tips}
								onChange={this.handleChange}
							/>
						</label>
						<label>
							Attenuation level
							<input
								type="number"
								name="attenuation_level"
								value={this.state.attenuation_level}
								onChange={this.handleChange}
							/>
						</label>
						<label>
							Contributed by
							<input
								type="text"
								name="contributed_by"
								value={this.state.contributed_by}
								onChange={this.handleChange}
							/>
						</label>
						<br />
						<button className="btn btn-primary">Enviar</button>
					</form>
				</div>
			</section>
		);
	}
}

export default NewBeer;
