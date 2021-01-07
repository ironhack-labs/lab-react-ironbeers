import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class OneBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const beerId = this.props.match.params.id;

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
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
        <h1>Welcome to the page for one beer</h1>
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

export default OneBeer;
