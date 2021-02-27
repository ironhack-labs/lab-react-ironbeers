import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

export class Random extends Component {
  state = {
    oneBeer: [],
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((oneBeerData) => {
        this.setState({ oneBeer: oneBeerData.data });
        console.log('here', oneBeerData.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="beer-box-details">
          <img
            src={this.state.oneBeer.image_url}
            className="beer-img-details"
            alt="random-beer-img"
          />
          <h1>{this.state.oneBeer.name}</h1>
          <h3> {this.state.oneBeer.tagline} </h3>
          <h5>{this.state.oneBeer.description}</h5>
          <p>{this.state.oneBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}


export default Random;
