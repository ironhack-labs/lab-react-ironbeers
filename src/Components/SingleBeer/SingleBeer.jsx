import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import './SingleBeer.css';

class SingleBeer extends Component {
  state = {
    beer: '',
  };
  componentDidMount() {
    let beerId;
    if (this.props.beerId) beerId = this.props.beerId;
    else beerId = this.props.match.params.beerId;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        this.setState({ beer: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <Navbar />
        <div key={this.state.beer._id} className="BeersList__beer-box">
          <img src={this.state.beer.image_url} alt={this.state.beer.name} />
          <div>
            <h1 className="BeersList__beer-text">{this.state.beer.name}</h1>

            <p className="BeersList-text tagline">{this.state.beer.tagline}</p>
            <p className="text-start">
              <b> Attenuation:</b> {this.state.beer.attenuation_level}{' '}
            </p>
            <p className="text-start">
              <b> First Brewed:</b> {this.state.beer.first_brewed}
            </p>
            <p className="mb-3">{this.state.beer.description}</p>
            <p className="BeersList__beer-text created">
              <b>Created by:</b> {this.state.beer.contributed_by}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
