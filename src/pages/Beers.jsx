import React, { Component } from 'react'
import IronBeersAPI from '../api/IronBeersAPI'
import { Link } from 'react-router-dom'

class Beers extends Component {
	state = {
		beers: null
	}


	componentDidMount(){
		IronBeersAPI
			.getBeers()
			.then((res)=>{
				this.setState({
					beers: res.data
				})
			})
			.catch(err => console.error(err))
	}

	render(){
		return (
			<div>
				{
					this.state.beers
					? this.state.beers.map(beer => (
						<div key={beer._id} className="beers">
							<Link to={`/${beer._id}`}>
								<img src={beer.image_url} alt={`pic of ${beer.name}`}/>
								<div>
									<h2>{beer.name}</h2>
									<p>{beer.tagline}</p>
									<p><span>Created by:</span> {beer.contributed_by}</p>
								</div>
							</Link>
						</div>
					))
					: <p id="loading">Loading...</p>
					
				}
			</div>
		)
	}
}

export default Beers
