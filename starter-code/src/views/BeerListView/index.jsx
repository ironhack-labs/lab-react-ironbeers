import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

export class BeerList extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        this.setState({ beers: response.data });
        //console.log(response);
      })
      .catch(error => {
        throw error;
      });
  }

  render() {
    const beers = this.state.beers;
    console.log(this.state.beers);

    return (
      <div>
        <Link to="/">
          <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt=""
          />
        </Link>
        <h1>Beer List</h1>
        {beers.map(beer => (
          <Link to={`/beer/${beer._id}`} key={beer._id}>
            <h2>{beer.name}</h2>
            <img src={beer.image_url} alt="" />
            <h3>{beer.tagline}</h3>
            <h4>{beer.contributed_by}</h4>
          </Link>
        ))}
      </div>
    );
  }
}

export default BeerList;
