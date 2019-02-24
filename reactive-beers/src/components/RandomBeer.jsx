import React, { Component } from 'react'
import beerService from '../beersService/beerService';
import './RandomBeer.css';
import Header from './header';

export default class RandomBeer extends Component {
  constructor(props) {
		super(props);
		this.state = {};

		this.beerService = new beerService();
		this.getBeers();
  }

  getBeers = () => {
		this.beerService
			.getBeers()
			.then((birras) => {
				const randomBeer = birras[Math.floor(Math.random() * birras.length)];
				this.setState(randomBeer);
			})
			.catch((err) => console.log(err));
	};
  
  render() {
    return (
      <div className="Home">
        <Header />

        <div className="random-beer">
					<div>
						<img src={this.state.image_url} alt="beer" />
					</div>

					<div className="random-text">
						<div>
							<div className="random-name">{this.state.name}</div>
							<div className="random-text">{this.state.attenuation_level}</div>
						</div>

						<div>
							<div className="random-text">{this.state.tagline}</div>
							<div className="random-text">{this.state.first_brewed}</div>
						</div>

						<div>
							{this.state.description}
							{this.state.contributed_by}
						</div>
					</div>
				</div>
      </div>
    )
  }
}
