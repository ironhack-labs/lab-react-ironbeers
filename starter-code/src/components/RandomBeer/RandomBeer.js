import React, {Component} from 'react'
import axios from 'axios'

export default class RandomBeer extends Component {
	state = {
		beer: {}
	}

	async componentDidMount() {
		const { data } = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
		this.setState({ beer:data })
	}

	render(){
		const {beer} = this.state
		return(
			<>
				<h2>{beer.name}</h2>
			</>
		)
	}
}