import React from 'react';
import axios from 'axios';
import SingleBeer from '../singleBeer/SingleBeer';
import './IdBeer.css';

export default class IdBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
      )
      .then((response) => {
        this.setState({ beer: response.data });
      });
  }

  render() {
    return (
      <div className="IdBeer container">
        {this.state.beer ? (
          <SingleBeer key={this.state.beer._id} {...this.state.beer} />
        ) : (
          <div className="IdBeer__loading">
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    );
  }
}
