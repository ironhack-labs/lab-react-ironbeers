import React, { Component } from 'react'
import axios from 'axios';
import './NewBeer.css';

export default class NewBeer extends Component {

	state = {
		name:'',
		tagline:'',
		description:'',
		first_brewed:'',
		brewers_tips: '',
		attenuation_Level: '',
		contributed_by: ''
}

changeHandler = (event) => {
	const {name, value} = event.target
	this.setState ({[name]: value})
}

addNewBeer = (event) => {
	event.preventDefault()
	axios.post('https://ih-beers-api2.herokuapp.com/beers/new',this.state )
	.then(response => console.log(response))
}


	render() {
		return (
			<div className="newBeerForm">
				<form onSubmit= {this.addNewBeer}>
					<label htmlFor="name">Name</label><br/>
					<input onChange = {this.changeHandler} name="name" type="text" /><br/>
					<label htmlFor="tagline">Tagline</label><br/>
					<input onChange = {this.changeHandler} name="tagline" type="text" /><br/>
					<label htmlFor="description">Description</label><br/>
					<textarea onChange = {this.changeHandler} name="description" type="text"></textarea><br/><br/>
					<label htmlFor="first_brewed">First Brewed</label><br/>
					<input onChange = {this.changeHandler} name="first_brewed" type="date" /><br/>
					<label htmlFor="brewers_tips">Brewer's Tips</label><br/>
					<input onChange = {this.changeHandler} name="brewers_tips" type="text" /><br/>
					<label htmlFor="attenuation_Level">Attenuation Level</label><br/>
					<input onChange = {this.changeHandler} name="attenuation_Level" type="number" /><br/>
					<label htmlFor="contributed_by">Contributed by</label><br/>
					<input onChange = {this.changeHandler} name="contributed_by" type="text" /><br/>
					<button type="submit">Add New</button>
				</form>
			</div>
		)
	}
}
