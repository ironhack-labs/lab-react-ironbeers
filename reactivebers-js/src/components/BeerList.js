import React, { Component } from "react";
import axios from "axios";
import "./BeerList.css";
import Header from "./Header";
import { Input, Card } from 'antd'

export default class BeerList extends Component {
	state = {
		beers: [],
		search: ""
	};

	async getBeers(search){
		try {
			let searchQuery = ''
			if (search) searchQuery = `/search?q=${search}`

			const { data } = await axios.get(`https://ih-beer-api.herokuapp.com/beers${searchQuery}`);
			this.setState({ beers: data });
		} catch (err) {
			console.log("err", err);
		}
	}

	componentDidMount() {
		this.getBeers()
	}

	handleChange = e => {
		const {
			target: { name, value }
		} = e;
		this.setState({ [name]: value });
		
		this.getBeers(value)
	};

	render() {
		const { beers } = this.state;
		return (
			<div style={{ marginTop: "60px" }}>
				<Header />
				<Input style={{width: '90%'}} type="text" name="search" onChange={this.handleChange} value={this.state.search} placeholder='search' />
				<div className="beer-list">
					{beers.map(beer => (
						<Card key={beer._id} onClick={() => this.props.history.push(`/beer/${beer._id}`)}>
							<div className="beer-item">
								<img src={beer.image_url} alt={beer.name} />
								<div className="beer-info">
									<h2>{beer.name}</h2>
									<h3>{beer.tagline}</h3>
									<small>{beer.contributed_by}</small>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		);
	}
}