import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

export default class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.getSingleProject();
  }

  getSingleProject = () => {
    axios
      .get(`http://localhost:5000/random`)
      .then(apiData => {
        const randomBeer = apiData.data;
        this.setState(randomBeer);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <div className="detail-container">
          <img src={this.state.image_url} alt="{beer.name}" />
          <div className="detail-info">
            <h1>{this.state.name}</h1>
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
