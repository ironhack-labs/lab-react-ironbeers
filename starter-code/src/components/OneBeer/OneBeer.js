import React, {Component} from 'react'
import axios from 'axios'


export default class OneBeer extends Component {
	state = {
		beer: {}
	}

	async componentDidMount() {
		const {id} = this.props.match.params
		const { data } = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
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