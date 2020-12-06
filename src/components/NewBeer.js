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
					<label htmlFor="tips">Brewer's Tips</label><br/>
					<input name="tips" type="text" /><br/>
					<label htmlFor="attenuation">Attenuation Level</label><br/>
					<input name="attenuation" type="number" /><br/>
					<label htmlFor="creator">Contributed by</label><br/>
					<input name="creator" type="text" /><br/>
					<button type="submit">Add New</button>
				</form>
			</div>
		)
	}
}
