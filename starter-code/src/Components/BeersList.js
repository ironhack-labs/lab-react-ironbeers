import React, { Component } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { Link } from "react-router-dom";

export default class BeersList extends Component {
  constructor() {
    super();
    this.state = {
      beerList: []
    };
  }
  getAllBeer() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(responseFromApi => {
        this.setState({
          beerList: responseFromApi.data
        });
      });
  }

  componentDidMount() {
    this.getAllBeer();
  }

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <h1>BeerList</h1>

        <div>
          {this.state.beerList.map((beer, idx) => {
            return (
              <div key={idx}>
                <img
                  
                  src={beer.image_url}
                  width="50px"
                  alt={beer.name}
                />
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <h5>Contributed by: {beer.contributed_by}</h5>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
