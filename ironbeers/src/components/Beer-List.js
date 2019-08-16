import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/beer.services'
import BeerCard from '../components/Beer-Card'

class BeerList extends Component {
	constructor(props) {
		super(props)
		this.state = { beers: [] }
		this.service = new Services()
	}

	componentDidMount() {
		this.service
			.getBeers('')
			.then(response => {
				console.log(response.data)
				this.setState({ beers: response.data })
			})
			.catch(err => console.log('err', err))
	}

	render() {
		return (
			<>
				<div className='container'>
					<h1>Listado de beers</h1>

					<div className='row'>
						{this.state.beers ? this.state.beers.map(beer => <BeerCard key={beer._id} {...beer} />) : <p>Hola bebe</p>}
					</div>
				</div>
			</>
		)
	}
}

export default BeerList
