import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Services from '../services/beer.services'

class Random extends Component {
	constructor() {
		super()
		this.state = { beer: {} }
		this.services = new Services()
	}

	componentDidMount() {
		this.services
			.getRandom()
			.then(response => {
				this.setState({ beer: response.data })
			})
			.catch(err => console.log(err))
	}

	render() {
		console.log(this.state.beer)
		return (
			<>
				<Header />
				<img src={this.state.beer.image_url} className='beer-big' alt='beer' />
				<h2>{this.state.beer.name}</h2>
				<h3>{this.state.beer.tagline}</h3>
				<small>{this.state.beer.first_brewed}</small>
				<p>{this.state.beer.description}</p>
				<small>{this.state.beer.contributed_by}</small>
			</>
		)
	}
}

export default Random
