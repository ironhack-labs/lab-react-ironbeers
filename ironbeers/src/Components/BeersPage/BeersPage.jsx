import React, { Component } from "react";
import { Link } from "react-router-dom";
import Beer from '../Beer/Beer'
import axios from "axios";
import "./BeersPage.css"

export default class BeersPage extends Component {
  constructor() {
    super();
    this.state = {
      beers: null
    };
  }

  getBeers = () => {
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(beer => {
        this.setState({ ...this.state, beers: beer.data })
      })
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.getBeers();
  }
  render() {

    return (this.state.beers) ? (
      <div>
        <div className="nav">
          <Link to={`/`}>Go to Home Page</Link>
        </div>
        {this.state.beers.map((beer, index) => {
          return <Beer beer={beer} />

        })}
        <div />
      </div>
    ) : (<div>Loading...</div>);
  }
}