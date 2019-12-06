import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllBeers extends Component {
	state = {
		data: []
	}

	async componentDidMount() {
		const { data } = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
		this.setState({ data })
	}

	render() {
		const {data} = this.state
		return (
			<>
			{data.map((beer)=>{
					return (
						<Link  key={beer._id} to={`/beers/${beer._id}`}>
							<div>
								<h2>{beer.name}</h2>
								<h4>{beer.tagline}</h4>
								<img src={beer.image_url} alt={beer.name}/>
								<p>Created by: {beer.contributed_by}</p>
							</div>
						</Link>
					)
			})}


			</>
		)
	}
}