import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class RandomBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((apiResponse) => {
        console.log(apiResponse);
        setTimeout(() => {
          this.setState({
            beer: apiResponse.data,
          });
        }, 1000);
      });
  }

  render() {
    if (!this.state.beer) {
      return <div>Loading.....</div>;
    }

    return (
      <div>
        <header>
          <Link exact to="/">
            Home
          </Link>
        </header>

        <h1>We'll show one random beer here</h1>
        <div>
          <img src={this.state.beer.image_url} />
          <h2>{this.state.beer.name}</h2>
          <p>{this.state.beer.tagline}</p>
          <p>{this.state.beer.first_brewed}</p>
          <p>{this.state.beer.attenuation_level}</p>
          <p>{this.state.beer.description}</p>
          <p>{this.state.beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
