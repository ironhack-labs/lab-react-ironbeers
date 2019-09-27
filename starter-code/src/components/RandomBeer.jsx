import React, { Component } from "react";
import { random } from "./../services/beers-api";
import NavigationBar from "./NavigationBar";

export default class randomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: []
    };
  }
  componentDidMount() {
    random()
      .then(randomBeer => {
        this.setState({
          randomBeer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <img
          src={this.state.randomBeer.image_url}
          alt="img"
          width="30px"
          height="auto"
        />
        <ul>
          <li>{this.state.randomBeer.name}</li>
          <li>{this.state.randomBeer.tagline}</li>
          <li>{this.state.randomBeer.first_brewed}</li>
          <li>{this.state.randomBeer.attenuation_level}</li>
          <li>{this.state.randomBeer.description}</li>
          <li>{this.state.randomBeer.contributed_by}</li>
        </ul>
      </div>
    );
  }
}
