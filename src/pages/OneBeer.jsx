import React, { Component } from 'react';
import beerAPI from '../api/apiHandler';
import { Link } from 'react-router-dom';

export default class oneBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    beerAPI
      .getOne(this.props.match.params.id)
      .then((apiResponse) => {
        console.log(this.props.match.params.id);
        console.log(apiResponse.data);
        this.setState({ beer: apiResponse.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      beerAPI
        .getOne(this.props.match.params.id)
        .then((apiResponse) => {
          console.log(apiResponse.data);
          this.setState({ beer: apiResponse.data });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    console.log(this.state.beer);
    return (
      <div>
        <h1>One beer</h1>
        {this.state.beer && (
          <React.Fragment>
            <p>{this.state.beer.name}</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}
