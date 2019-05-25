import React, { Component } from 'react';
import Header from './Header';

export default class NewBeer extends Component {
	constructor() {
		super();
		this.state = {
			newbeer: {
				name: ''
			}
		};
	}

	handleDetails = (e) => {
		const { name, value } = e.target;
		let newBeer = { [name]: value };
		this.setState({ newbeer: newBeer });
	};

	// axios
	// 	.post('https://ih-beer-api.herokuapp.com/beers/new', newbeer)
	// 	.then((result) => {
	// 		console.log(result);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});

	render() {
		return (
			<div>
				<Header />
				<form onSubmit={(e) => e.currentTarget.value}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							className="form-control"
							name="name"
							aria-describedby="name"
							onChange={(e) => this.handleDetails(e)}
						/>
						<label htmlFor="tagline">Tagline</label>
						<input
							type="text"
							className="form-control"
							name="tagline"
							aria-describedby="tagline"
							onChange={(e) => this.handleDetails(e)}
						/>
						<label htmlFor="description">Description</label>
						<textarea rows="10" cols="50" onChange={(e) => this.handleDetails(e)} />
						<label htmlFor="firstbrewed">First Brewed</label>
						<input
							type="text"
							className="form-control"
							name="firstbrewed"
							aria-describedby="firstbrewed"
							onChange={(e) => this.handleDetails(e)}
						/>
						<label htmlFor="tips">Brewer's Tips</label>
						<input
							type="text"
							className="form-control"
							name="tips"
							aria-describedby="tips"
							onChange={(e) => this.handleDetails(e)}
						/>
						<label htmlFor="attenuation">Attenuation level</label>
						<input
							type="number"
							className="form-control"
							name="attenuation"
							aria-describedby="attenuation"
							onChange={(e) => this.handleDetails(e)}
						/>
						<label htmlFor="contributed">Contributed By</label>
						<input
							type="text"
							className="form-control"
							name="contributed"
							aria-describedby="contributed"
							onChange={(e) => this.handleDetails(e)}
						/>
						<button type="submit" className="btn btn-primary">
							Add New
						</button>
					</div>
				</form>
			</div>
		);
	}
}
