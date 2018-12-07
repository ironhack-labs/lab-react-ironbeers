import React, { Component } from "react";
import Header from "../Header";
import axios from "axios";
import "./RandomBeer.css";
import { Link, Switch, Route } from "react-router-dom";

export default class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: null
    };
  }

  componentDidMount() {
    this.getRandomBeer();
  }

  getRandomBeer = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(responseFromApi => {
        this.setState({ ...this.state, randomBeer: responseFromApi.data }, () =>
          console.log(this.state.randomBeer)
        );
      });
  };

  render() {
    return this.state.randomBeer ? (
      <div>
        <Header />
        <div>
          <div className="card-beer">
            <img src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name} />
            <div>
              <h3>
                <Link to={this.state.randomBeer._id}>{this.state.randomBeer.name}</Link>
              </h3>
              <p>{this.state.randomBeer.tagline}</p>
              <p>Crated by: {this.state.randomBeer.contributed_by}</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}
