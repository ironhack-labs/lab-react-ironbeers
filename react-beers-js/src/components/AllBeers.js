import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Header from "./Header.js";

class AllBeers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: [] };
  }

  getAllBeers = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        console.log(responseFromApi);
        this.setState({
          listOfBeers: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div className="beersList">
        <Header />
        <div className="oneBeer">
          {this.state.listOfBeers.map(beer => {
            return (
              <div key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                  <img src={beer.image_url} alt="" style={{ height: "75px" }} />
                  <div className="description">
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <p>Created by : {beer.contributed_by}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllBeers;
