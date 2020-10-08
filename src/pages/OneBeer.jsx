import React, { Component } from 'react';
import BeersApi from '../API/BeersApi';
import { Link } from 'react-router-dom';

export default class OneBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    console.log(this.props);
    BeersApi.getOne(this.props.match.params.id)
      .then((apiResponse) => {
        // console.log(apiResponse.data);
        this.setState({ beer: apiResponse.data });
      })
      .catch((error) => console.log(error));
    // console.log(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      BeersApi.getOne(this.props.match.params.id)
        .then((apiResponse) => {
          // console.log(apiResponse.data);
          this.setState({ beer: apiResponse.data });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <div>
        <h1>One Beer</h1>
        {this.state.beer && (
          <React.Fragment>
            <img src={this.state.beer.image_url} alt="image" />
            <p>{this.state.beer.name}</p>
            <p>{this.state.beer.tagline}</p>
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
