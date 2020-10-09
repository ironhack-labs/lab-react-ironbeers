import React, { Component } from 'react'
import IronBeersAPI from '../api/IronBeersAPI'

export default class AddBeer extends Component {
	state = {
		name: '',
		tagline: '',
		description: '',
		first_brewed: '',
		brewers_tips: '',
		attenuation_level: 0,
		contributed_by: ''
	}

	handleChange= e => {
		const { name, value } = e.target
		e.target.type === 'number'
		? this.setState({[name] : parseInt(value)})
		:this.setState({[name] : value})
	}

	handleSubmit = e => {
		e.preventDefault()
		IronBeersAPI
			.addOne(this.state)
			.then(res => {
				console.log(res)
			})
			.catch(err =>  {
				console.log(err)
			})
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">name :</label>
					<input name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
					<label htmlFor="tagline">tagline :</label>
					<input name="tagline" type="text" onChange={this.handleChange} value={this.state.tagline}/>
					<label htmlFor="description">description :</label>
					<input name="description" type="textarea" onChange={this.handleChange} value={this.state.description}/>
					<label htmlFor="first_brewed">first brewed :</label>
					<input name="first_brewed" type="text" onChange={this.handleChange} value={this.state.first_brewed}/>
					<label htmlFor="brewers_tips">brewers tips :</label>
					<input name="brewers_tips" type="text" onChange={this.handleChange} value={this.state.brewers_tips}/>
					<label htmlFor="attenuation_level">attenuation level :</label>
					<input name="attenuation_level" type="number" onChange={this.handleChange} value={this.state.attenuation_level}/>
					<label htmlFor="contributed_by">contributed by :</label>
					<input name="contributed_by" type="text" onChange={this.handleChange} value={this.state.contributed_by}/>
					<input type="submit" value="Add"/>
				</form>
			</div>
		)
	}
}
