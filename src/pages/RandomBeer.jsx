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
					</div>
				</div>
				: <p id="loading">Loading...</p>
			}
		</div>
		)
	}
}

export default RandomBeer
