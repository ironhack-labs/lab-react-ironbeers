import React, { Component } from 'react'
import './Beers.css'
import { Link } from 'react-router-dom'

import Navbar from '../navbar/Navbar'
import Axios from 'axios'

class Beers extends Component {
	constructor() {
		super()
		this.state = {}
    }
    

	render() {
		let allBeers = this.props.beersApi
		return (
			<>
				<Navbar />
				<div className='each-page'>
					<h1>All beers</h1>
					{allBeers.map((beer) => (
						<div key={beer._id} className='each-beer'>
							<Link to={`/beer/${beer._id}`}>
								<figure className='beer-img'>
									<img src={beer.image_url} />
								</figure>
							</Link>
							<div className='text-card'>
								<h3>{beer.name}</h3>
								<h5>{beer.tagline}</h5>
								<p>{beer.contributed_by}</p>
							</div>
						</div>
					))}
				</div>
			</>
		)
	}
}

export default Beers
