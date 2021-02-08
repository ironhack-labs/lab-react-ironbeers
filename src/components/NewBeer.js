import React, {Component} from 'react';
import axios from 'axios';

class RandomBeer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			tagline: '',
			description: '',
			first_brewed: '',
			brewers_tips: '',
			attenuation_level: 0,
			contributed_by: ''
		};
	}

	handleFormSubmit = event => {
		event.preventDefault();
		const {
			name,
			tagline,
			description,
			first_brewed,
			brewers_tips,
			attenuation_level,
			contributed_by
		} = this.state;
		axios
			.post('https://ih-beers-api2.herokuapp.com/beers/new', {
				name,
				tagline,
				description,
				first_brewed,
				brewers_tips,
				attenuation_level,
				contributed_by
			})
			.then(beer => {
				console.log(beer.data.message);
				this.setState({
					name,
					tagline,
					description,
					first_brewed,
					brewers_tips,
					attenuation_level,
					contributed_by
				});
			}, error => {
				console.error(error);
			});
	};

	handleChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div>
				<div className="mb-3">
					<form onSubmit={this.handleFormSubmit}>
						<label htmlFor="name"
							   className="form-label">Name</label>
						<input type="text"
							   className="form-control"
							   id="name"
							   name="name"
							   value={this.state.name}
							   onChange={event => this.handleChange(event)}/>

						<label htmlFor="tagline"
							   className="form-label">Tagline</label>
						<input type="text"
							   className="form-control"
							   id="tagline"
							   name="tagline"
							   value={this.state.tagline}
							   onChange={event => this.handleChange(event)}/>

						<label htmlFor="description"
							   className="form-label">Description</label>
						<textarea className="form-control"
								  id="description"
								  name="description"
								  rows="3"
								  value={this.state.description}
								  onChange={event => this.handleChange(event)}/>

						<label htmlFor="first_brewed"
							   className="form-label">First Brewed</label>
						<input type="text"
							   className="form-control"
							   id="first_brewed"
							   name="first_brewed"
							   value={this.state.first_brewed}
							   onChange={event => this.handleChange(event)}/>

						<label htmlFor="brewers_tips"
							   className="form-label">Brewers Tips</label>
						<input type="text"
							   className="form-control"
							   id="brewers_tips"
							   name="brewers_tips"
							   value={this.state.brewers_tips}
							   onChange={event => this.handleChange(event)}/>

						<label htmlFor="attenuation_level"
							   className="form-label">Attenuation Level</label>
						<input type="number"
							   className="form-control"
							   id="attenuation_level"
							   name="attenuation_level"
							   value={this.state.attenuation_level}
							   onChange={event => this.handleChange(event)}/>

						<label htmlFor="contributed_by"
							   className="form-label">Contributed by</label>
						<input type="text"
							   className="form-control"
							   id="contributed_by"
							   name="contributed_by"
							   value={this.state.contributed_by}
							   onChange={event => this.handleChange(event)}/>

						<div className="button">
							<button type="submit"
									className="btn btn-primary mb-3"
									id="button">Add new
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default RandomBeer;