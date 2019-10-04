import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
import axios from "axios";

export default class showbeers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then(response => {
      this.setState({ beers: response.data });
    });
  }
  listBeers = () => {
    return this.state.beers.map((beer, i) => {
      return (
        <div key={i} className="col-6 mt-4 mb-4">
          <div className="row">
            <div className="col-4">
              <img width="40px" src={beer.image_url} alt={beer.name}/>
            </div>
            <div className="col-8">
              <h4> {beer.name} </h4>
              <p>{beer.tagline}</p>
              <small>
              <Link to={`/beerDetails/${beer.id}`} ><u>Beer Details</u></Link>
              </small>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">{this.listBeers()}</div>
        </div>
      </div>
    );
  }
}
