import React, { Component } from "react";
import axios from "axios";

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.fetchBeer();
  }
  fetchBeer = () => {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(response => {
        const Beer = response.data;
        this.setState(Beer);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="beerCard">
        <img src={this.state.image_url} alt={this.state.name} />
        <br />
        <span>
          <h4>{this.state.name}</h4>&nbsp;-&nbsp;
          <small>{this.state.attenuation_level}</small>
        </span>
        <span>
          {this.state.tagline}&nbsp;-&nbsp;
          <small>{this.state.first_brewed}</small>
        </span>
        <br />
        <p>{this.state.description}</p>
        <br />
        <small>{this.state.contributed_by}</small>
      </div>
    );
  }
}

export default RandomBeer;
