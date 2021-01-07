import React, { Component } from 'react';
import axios from 'axios';

export default class randomBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const beerId = this.props.match.params.id;

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((apiResponse) => {
        // console.log(apiResponse.data);

        // setTimeout(() => {
        this.setState({
          beer: apiResponse.data,
        });
        // }, 1000);
      });
  }

  render() {
    if (!this.state.beer) {
      return <div>Loading.....</div>;
    }
    console.log(this.state.beer);
    return (
      <div>
        <h2>Random Beer</h2>
        <div>
          <h2>{this.state.beer.name}</h2>
          <img src={this.state.beer.image_url} alt={this.state.beer.name} />
          <p>{this.state.beer.description}</p>
        </div>
      </div>
    );
  }
}
