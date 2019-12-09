import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Random extends Component {
  constructor() {
    super();
    this.state = { beer: {} };
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(res => {
      this.setState({
        beer: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Link to={"/beer/" + this.state.beer._id} className="reset-a">
          <div className="beer-container">
            <div className="beer-img-container">
              <img
                src={this.state.beer.image_url}
                className="beer-img"
                alt="all"
              />
            </div>
            <div className="beer-container-info">
              <h1 className="beer-header">{this.state.beer.name}</h1>
              <p className="beer-info">{this.state.beer.tagline}</p>
              <p className="beer-owner">
                <span className="theSpan">Created by:</span>{" "}
                {this.state.beer.contributed_by}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Random;
