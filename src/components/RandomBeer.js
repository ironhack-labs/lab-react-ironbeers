import React, { Component } from "react";
import Nav from "./Nav";
import axios from "axios";

export default class RandomBeer extends Component {
  state = {
    beer: {}
  };

  componentDidMount() {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(beer => {
        console.log(beer.data);
        this.setState({
          beer: beer.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="beerslice">
          <img className="beerimg" src={this.state.beer.image_url} />
          
            <h3>{this.state.beer.name}</h3>

          <h4>{this.state.beer.tagline}</h4>
          <p>{this.state.beer.description}</p>
          <p>First Brewed: {this.state.beer.first_brewed}</p>
          <p>Attenuation Level: {this.state.beer.attenuation_level}</p>
          <p>Contributed by: {this.state.beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}
