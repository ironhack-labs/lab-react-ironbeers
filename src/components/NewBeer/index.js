import React, { Component } from 'react';
import axios from 'axios';

export default class NewBeer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			tagline: '',
			description: '',
			firstBrewed: '',
			brewersTips: '',
			contributedBy: 'Eddie',
			attenuationLevel: 0,
		};
	}

	handleFormSubmit = (e) => {
		e.preventDefault();
		axios
			.post('https://sample-api-ih.herokuapp.com/new', this.state)
			.then(() => {
				// this.props.getData();
				this.setState({
					name: '',
					tagline: '',
					description: '',
					firstBrewed: '',
					brewersTips: '',
					contributedBy: '',
					attenuationLevel: 0,
				});
			})
			.catch((error) => console.log(error));
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="add-project">
				<form onSubmit={this.handleFormSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name:</label>
						<input
							className="form-group"
							type="text"
							name="name"
							onChange={(e) => this.handleChange(e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="tagline">tagline:</label>
						<input
							className="form-group"
							type="text"
							name="tagline"
							onChange={(e) => this.handleChange(e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="attenuationLevel">attenuationLevel:</label>
						<input
							className="form-group"
							type="number"
							name="attenuationLevel"
							onChange={(e) => this.handleChange(e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="firstBrewed">firstBrewed:</label>
						<input
							className="form-group"
							type="text"
							name="firstBrewed"
							onChange={(e) => this.handleChange(e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="brewersTips">brewersTips:</label>
						<input
							className="form-group"
							type="text"
							name="brewersTips"
							onChange={(e) => this.handleChange(e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="contributedBy">contributedBy:</label>
						<input
							className="form-group"
							type="text"
							name="contributedBy"
							onChange={(e) => this.handleChange(e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="description">description:</label>
						<textarea
							className="form-group"
							rows="5"
							name="description"
							onChange={(e) => this.handleChange(e)}
						/>
					</div>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
