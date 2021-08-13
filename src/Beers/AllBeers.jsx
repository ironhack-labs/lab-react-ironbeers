import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import RandomBeer from './RandomBeer';
import axios from 'axios';


export class AllBeers extends Component {
	state = {
		beers: [],
	};

	componentDidMount() {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((res) => {
				console.log(res.data);
				this.setState({
					beers: res.data,
				});
			})
			.catch((err) => console.log (err));
	}

	render () {
		return (
			<div> 

				<h1> All BEeeeers </h1>
				      <Route path="/beers/:id/" component={RandomBeer} /> 

				<ul>
					{this.state.beers.map((beer) => {
						return (
							
							
							<li key={beer._id}>
								<Link to={`/beers/${beer._id}`} > 
								<img src={beer.image_url}></img>
								{beer.name} 
												
								<p> {beer.tagline} </p>
								<p> Created by: {beer.contributed_by} </p>
								</Link>				
								
							</li>

							
						);
					})}
				</ul>

		
			</div>
		)
	}
	
}

export default AllBeers
