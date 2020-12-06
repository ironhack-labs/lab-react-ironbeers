import React, { Component } from 'react'
import axios from 'axios';
import './NewBeer.css';

export default class NewBeer extends Component {

	addNewBeer = () => {
		axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`)
		.then(response => {
				console.log(response.data)
		})
	}


	render() {
		return (
			<div className="newBeerForm">
				<form action="https://ih-beers-api2.herokuapp.com/beers/new" method="POST">
					<label htmlFor="name">Name</label><br/>
					<input name="name" type="text" /><br/>
					<label htmlFor="tagline">Tagline</label><br/>
					<input name="tagline" type="text" /><br/>
					<label htmlFor="description">Description</label><br/>
					<textarea name="description" type="text"></textarea><br/><br/>
					<label htmlFor="first_brewed">First Brewed</label><br/>
					<input name="first_brewed" type="date" /><br/>
					<label htmlFor="brewers_tips">Brewer's Tips</label><br/>
					<input name="brewers_tips" type="text" /><br/>
					<label htmlFor="attenuation_Level">Attenuation Level</label><br/>
					<input name="attenuation_Level" type="number" /><br/>
					<label htmlFor="contributed_by">Contributed by</label><br/>
					<input name="contributed_by" type="text" /><br/>
					<button type="submit">Add New</button>
				</form>
			</div>
		)
	}
}
