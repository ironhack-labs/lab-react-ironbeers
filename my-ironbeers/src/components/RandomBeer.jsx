import React, { Component } from 'react';
import Navbar from './Navbar';
import AllBeersService from '../service/AllBeersService';
import './RandomBeer.css';

class RandomBeer extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.AllBeersService = new AllBeersService();
		this.getBeer();
	}

	getBeer = () => {
		this.AllBeersService
			.getBeer()
			.then((birras) => {
				const randomBeer = birras[Math.floor(Math.random() * birras.length)];
				this.setState(randomBeer);
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<Navbar />

				<div className="random-beer">
					<div>
						<img src={this.state.image_url} alt="beer" />
					</div>

					<div className="random-text">
						<div>
							<div className="random-name">{this.state.name}</div>
							<div className="random-level">{this.state.attenuation_level}</div>
						</div>

						<div>
							<div className="random-tag">{this.state.tagline}</div>
							<div className="random-brewed">{this.state.first_brewed}</div>
						</div>

						<div>
							{this.state.description}
							{this.state.contributed_by}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RandomBeer;
// attenuation_level: 75
// brewers_tips: "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus."
// contributed_by: "Sam Mason <samjbmason>"
// created_at: "2018-05-29T07:19:02.192Z"
// description: "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
// first_brewed: "09/2007"
// image_url: "https://images.punkapi.com/v2/keg.png"
// name: "Buzz"
// tagline: "A Real Bitter Experience."
// updated_at: "2018-05-29T07:19:02.192Z"
// __v: 0
// _id: "5b0cfee6861982000a48fd2a"
// __proto__: Object
