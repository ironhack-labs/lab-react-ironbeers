import React, { Component } from 'react';
import beerAPI from '../api/apiHandler';
import Header from '../components/Header';

export default class oneBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    beerAPI
      .getOne(this.props.match.params.beerId)
      .then((apiResponse) => {
        this.setState({ beer: apiResponse.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.beerId !== prevProps.match.params.beerId) {
      beerAPI
        .getOne(this.props.match.params.beerId)
        .then((apiResponse) => {
          this.setState({ beer: apiResponse.data });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <h1>One beer</h1>
        {this.state.beer && (
          <React.Fragment>
            <img
              className="photo-beer"
              src={this.state.beer.image_url}
              alt="One beer"
            />
            <p>{this.state.beer.name}</p>
            <p>{this.state.beer.tagLine}</p>
            <p>{this.state.beer.first_brewed}</p>
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}
