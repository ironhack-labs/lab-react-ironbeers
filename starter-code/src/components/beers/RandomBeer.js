import React, {Component} from 'react';
import axios from 'axios';
import Header from '../Header';
const ENDPOINT = 'https://ih-beer-api.herokuapp.com/beers';
class RandomBeer extends Component {
	state = {
		beer: {}
	}

	async componentDidMount() {
		const { data } = await axios.get(ENDPOINT)
		this.setState({ beer:data })
	}

	render(){
		const {beer} = this.state
		return(
			<div>
      <Header></Header>
			<img src={beer.image_url} alt={beer.name}/>
			<h2>{beer.name}</h2>
			<p>{beer.description}</p>
			<p>{beer.contributed_by}</p>
      </div>
      )
	}
} 

export default RandomBeer;