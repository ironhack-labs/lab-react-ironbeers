import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BeerDetails extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const beerID = this.props.match.params.id;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerID}`)
      .then((res) => {
        console.log('response after beerID', res.data);
        this.setState({
          beer: res.data,
        });
      });
  }

  render() {
    const beerDetails = () => {
      if (this.state.beer) {
        return (
          <div>
            <img
              className="beer-img"
              src={this.state.beer.image_url}
              alt="beer"
            />
            <h2> {this.state.beer.name}</h2>
            <p> {this.state.beer.tagline}</p>
            <p> {this.state.beer.first_brewed}</p>
            <p> {this.state.beer.attenuation_level}</p>
            <p> {this.state.beer.description}</p>
            <p> {this.state.beer.contributed_by}</p>
          </div>
        );
      }
    };

    console.log('state:', this.state);
    return (
      <div>
        <header>
          <Link to={'/'}>Back to Home</Link>
        </header>

        {beerDetails()}
      </div>
    );
  }
}

export default BeerDetails;
