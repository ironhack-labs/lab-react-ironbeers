import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';

import axios from 'axios';

export default class SingleBeer extends Component {
  state = {
    data: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        this.setState({
          data: res.data,
          isLoading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.isLoading) return <h1>Loading...</h1>;
    return (
      <div className="card">
        <NavBar />
        <div className="single-beer">
          <div className="my-4 mx-2">
            <img
              src={this.state.data.image_url}
              alt={this.state.data.name}
              width="100"
            />
            <div className="col d-flex flex-column align-items-start justify-content-center">
              <div className="col">
                <h3>{this.state.data.name}</h3>
                <h5 className="text-secondary">{this.state.data.tagline}</h5>
                <h5>{this.state.data.attenuation_level}</h5>
                <p>{this.state.data.first_brewed}</p>
              </div>
              <h6>{this.state.data.description}</h6>
              <p>{this.state.data.contributed_by}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
