// components/projects/ProjectDetails.js

import React, { Component } from "react";
import axios from "axios";
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
    const { beerId } = this.props.match.params;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
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
        <div className="beers-card">
        <div>
          <img className="beer-img" src={this.state.image_url} alt="img" />
          </div>
          <div className="beers-card-info"> 
          <h3>{this.state.name}</h3>
          <p>{this.state.tagline}</p>
          <p>{this.state.first_brewed}</p>
          <p>{this.state.attenuation_level}</p>
          <p>{this.state.description}</p>
          <p>{this.state.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
