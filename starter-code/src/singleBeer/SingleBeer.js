import React, { Component } from "react";
import axios from "axios";
import "./singleBeer.css";
const url = "https://ih-beers-api2.herokuapp.com/beers/";

export default class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: []
    };
  }

  componentDidMount() {
    axios.get(url + this.props.beer).then(element => {
      this.setState({
        ...this.state,
        beer: element.data
      });
      console.log(this.state.beer);
    });
  }

  render() {
    return (
      <div className="single-container">
        <div className="single-beer-container">
          <img src={this.state.beer.image_url} className="beer-image" />
          <h2 className="beer-title">{this.state.beer.name}</h2>
          <p className="beer-description">{this.state.beer.description}</p>
        </div>
      </div>
    );
  }
}
