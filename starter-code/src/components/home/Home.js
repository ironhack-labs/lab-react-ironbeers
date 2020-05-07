import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return (
			<>
				<div className='home'>
					<h1>No me gusta react y quiero llorar</h1>
					<div>
						<Link to='/beers'>
							<img src='images/beers.png' />
							<h2>Ver cervezas</h2>
						</Link>
					</div>
					<div>
						<Link to='/random-beer'>
							<img src='images/random-beer.png' />
							<h2>No funciona, ni te molestes en pulsar, jefe</h2>
						</Link>
					</div>
					<div>
						<Link to='/beer/:id'>
							<img src='images/new-beer.png' />
							<h2>No funciona, ni te molestes en pulsar, jefe</h2>
						</Link>
					</div>
				</div>
			</>
		)
	}
}

export default Home
