import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BeerDetail.css";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/random")
      .then(response => {
        this.setState({ beers: response.data });
      });
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-dark bg-primary justify-content-center">
          <Link to="/">
            <img src="/images/home.png" alt="" />
          </Link>
        </div>
        {this.state.beers.map((beer, idx) => {
          return (
            <div className="single-container container" key={idx}>
              <img src={beer.image_url} alt="" />
              <div className="row">
                <div className="col-10">
                  <h2>{beer.name}</h2>
                </div>
                <div className="col-2">
                  <p>{beer.attenuation_level}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-9">
                  <span>{beer.tagline}</span>
                </div>
                <div className="col-3">
                  <p>{beer.first_brewed}</p>
                </div>
              </div>
              <p>{beer.description}</p>
              <p>
                <b>Created by: </b>
                {beer.contributed_by}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default RandomBeer;
