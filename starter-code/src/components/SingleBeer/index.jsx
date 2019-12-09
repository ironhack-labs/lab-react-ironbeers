import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: ""
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    //console.log(id);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then(response => {
        this.setState({ beer: response.data });
        console.log(response);
      })
      .catch(error => {
        throw error;
      });
  }

  render() {
    return (
      <div>
        <Link to="/">
          <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt=""
          />
        </Link>
        <h1>Single Beer</h1>
        <div>
          <img src={this.state.beer.image_url} alt="" />
          <h2>{this.state.beer.name}</h2>
          <h3>{`Tagline: ${this.state.beer.tagline}`}</h3>
          <h3>{`Attenuation level: ${this.state.beer.attenuation_level}`}</h3>
          <p>{this.state.beer.description}</p>
          <h4>{`Contributed by: ${this.state.beer.contributed_by}`}</h4>
        </div>
      </div>
    );
  }
}
