import React, { Component } from 'react';
import axios from 'axios';
import './BeerDetails.css';

export default class RandomBeer extends Component {
    
state = {
    beer: null
}

getBeerData = () => {
	const id = this.props.match.params.id;
	console.log("BeerId", id);

	axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
			.then(response => {
			const beer = response.data;
			this.setState({
					beer: beer
			})
	})
}

componentDidMount() {
  this.getBeerData();
}  
    
    
render() {

const beer = this.state.beer;
if (!beer) return <>Loading...</>

	return (
		<>
			<div className="details">
				<div className="beer-image">
					<img className="details-img" src={beer.image_url} alt="{beer.name}" />
				</div>
				<div className="headings">
					<h2>{beer.name}</h2>
					<p>{beer.tagline}</p>
					<h2 className="right">{beer.attenuation_level}</h2>
					<p className="right"><strong>{beer.first_brewed}</strong></p>
				</div>
				
				<p>{beer.description}</p>
				<h6>Created by: {beer.contributed_by}</h6>
			</div>
	</>
	)
}
}
