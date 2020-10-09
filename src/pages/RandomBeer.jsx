import React, { Component } from 'react'
import IronBeersAPI from '../api/IronBeersAPI'

class RandomBeer extends Component {
	state = {
		beer: null
	}


	componentDidMount() {
		IronBeersAPI
		  .getOne(this.props.match.params.id)
		  .then(res => {
			this.setState({ beer: res.data })
		  })
		  .catch(err => console.log(err))
	  }

	render() {
		return (
		<div className='beer'>
			{
				this.state.beer
				? <div>
					<img src={this.state.beer.image_url} alt=""/>
					<div>
						<h1>{this.state.beer.name}</h1>
						<h3>{this.state.beer.tagline}</h3>
						<div>
							<p>{this.state.beer.first_brewed}</p>
							<p>{this.state.beer.attenuation_level}</p>
						</div>
						<p>{this.state.beer.description}</p>
						<p>{this.state.beer.contributed_by}</p>
					</div>
				</div>
				: <p id="loading">Loading...</p>
			}
		</div>
		)
	}
}

export default RandomBeer
