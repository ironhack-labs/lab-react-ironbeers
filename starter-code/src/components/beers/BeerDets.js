import React, { Component } from 'react'
import axios from 'axios'

class BeerDets extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chosenBeer: '',
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id
		// axios
		// 	.get('https://ih-beers-api2.herokuapp.com/beers/' + id)
		// 	.then((response) => {
		// 		this.setState({ chosenBeer: response.data })
		// 	})
		// 	.catch((err) => console.log(err))
	}

	render() {
		return (
			<>
				<h1>No funciona un carajo, joder</h1>
			</>
		)
	}
}

export default BeerDets
