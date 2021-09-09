import React from 'react';
import axios from 'axios';
import SingleBeer from '../SingleBeer/SingleBeer';
import Navbar from '../Navbar/Navbar';

import './RandomBeer.css';

export default class RandomBeer extends React.Component {
  state = {
    beer: undefined,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({ beer: response.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="RandomBeer">
        {this.state.beer ? (
          <SingleBeer key={this.state.beer._id} {...this.state.beer} />
        ) : (
          <div className="RandomBeer__loading">
            <Navbar />
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    );
  }
}
