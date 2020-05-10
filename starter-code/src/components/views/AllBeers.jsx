import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

export default class AllBeers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beers: []
		};
	}

	componentDidMount() {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((dbRes) => {
				this.setState({ beers: dbRes.data });
			})
			.catch((dbErr) => {
				console.log(dbErr);
			});
	}

	render() {
		return (
			<React.Fragment>
				<NavBar />
				<div>
					<h1>All Beers</h1>
					{this.state.beers.map((beer, index) => (
						<div className="no-decoration" key={index}>
							<Link to={`/${beer._id}`}>
								<div className="all-beers-container">
									<div className="all-beers-left">
										<img src={beer.image_url} alt="" />
									</div>
									<div className="all-beers-right">
										<div>
											<h2>{beer.name}</h2>
											<h3>{beer.tagline}</h3>
											<h6>Created by {beer.contributed_by} </h6>
										</div>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</React.Fragment>
		);
	}
}
