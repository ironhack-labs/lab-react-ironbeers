// components/projects/ProjectDetails.js

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from './Nav';

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSingleBeer = this.getSingleBeer.bind(this);
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  getSingleBeer() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((responseFromApi) => {
        const theBeer = responseFromApi.data;
        this.setState(theBeer);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <img className="beer-img" src={this.state.image_url} alt="img" />
          <h3>{this.state.name}</h3>
          <p>{this.state.tagline}</p>
          <p>{this.state.first_brewed}</p>
          <p>{this.state.attenuation_level}</p>
          <p>{this.state.description}</p>
          <p>{this.state.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
