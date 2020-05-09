import React, { Component } from "react";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";

import axios from "axios";

export default class AllBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((apiResponse) => {
        this.setState({ beers: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div>
        <HomeButton />
        <h1 className="allbeers-title">BEERS</h1>
        <p className="allbeers-click">Click on one beer to learn more about it</p>

        <div className="allbeer-total">
          {this.state.beers.map((beer, index) => (
            <Link to={`/beer/${beer._id}`} className='allbeers-link' key={index}>
              <div className="all-beers">
                <div className="all-beers-separation">
                  <img src={beer.image_url} alt="" />
                </div>
                <div className="all-beers-text">
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <p>Created by {beer.contributed_by}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
