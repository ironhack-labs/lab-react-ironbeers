import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';

export class Beer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
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
        <Header />
        <h2>Welcome to the {this.state.beer.name}'s page</h2>
        <div>
          <img src={this.state.beer.image_url} style={{ height: 250 }} />
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

export default Beer;
