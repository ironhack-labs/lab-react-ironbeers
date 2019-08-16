import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Services from '../services/beer.services'

class Beers extends Component {
	constructor() {
		super()
		this.state = { beers: [] }
		this.services = new Services()
	}

	componentDidMount() {
		this.services
			.getBeers()
			.then(response => this.setState({ beers: response.data.splice(0, 40) }))
			.catch(err => console.log(err))
	}

	render() {
		console.log(this.state.beers)
		return (
			<>
				<Header />
				<div className='container'>
					{this.state.beers.map(elm => {
						return (
							<div key={elm._id} className='row'>
								<div className='col-md-2'>
									<img src={elm.image_url} className='beer' alt='beer' />
								</div>
								<div className='col-md-5'>
									<h3>{elm.name}</h3>
									<p>{elm.tagline}</p>
									<small>Created by: {elm.contributed_by}</small> <br />
									<Link to={`/beers/${elm._id}`}>Check details</Link>
								</div>
							</div>
						)
					})}
				</div>
			</>
		)
	}
}

export default Beers
