import React, { Component } from "react";
import Header from "../components/Header";
import axios from "axios";
// import NewBeerView from "./NewBeerView";
import { Link } from "react-router-dom";

import "./BeerListView.scss";

export class BeerListView extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    console.log(this.state.beers);
    return (
      <div>
        <Header />
        {/* <NewBeerView /> */}
        {this.state.beers.map(beer => (
          <div className="beerBox" key={beer._id}>
            <img src={beer.image_url} alt="" />,<h1>Beer name: {beer.name}</h1>,
            <p>Tagline: {beer.tagline}</p>,
            <p>contributed_by: {beer.contributed_by}</p>,{" "}
            <Link to={`/beers/${beer._id}`}>Details of this beer</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default BeerListView;

// ()
