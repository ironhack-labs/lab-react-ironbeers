import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
export default class RandomBeer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			beer: {}
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;

		axios
			.get(`http://ih-beers-api2.herokuapp.com/beers/${id}`)
			.then((response) => {
				this.setState({
					beer: response.data
				});
			})
			.catch((error) => console.log(error));
	}

	render() {
		const { beer } = this.state;

		return (
			<React.Fragment>
				<NavBar />
				<div>
					<div className="container-beer-detail">
						<div className="visual">
							<img src={beer.image_url} alt={beer.name} />
						</div>
						<div className="first-container">
							<h1 className="align-left">{beer.name}</h1>
							<h2>{beer.attenuation_level}</h2>
						</div>
						<div className="second-container">
							<h3 className="align-left">{beer.tagline}</h3>
							<h6>{beer.first_brewed}</h6>
						</div>
						<div className="third-container">
							<p>{beer.description}</p>
							<h5>{beer.contributed_by}</h5>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
