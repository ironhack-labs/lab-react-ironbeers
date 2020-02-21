import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";

export default class Data extends Component {
  state = {
    beers: [],
    APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers/"
    // search: ""
  };

  componentDidMount() {
    axios
      .get(this.state.APIEndpoint)
      .then(apiResponse => this.setState({ beers: apiResponse.data }))
      .catch(apiErr => console.log(apiErr));
  }

  //   handleInput = e => {
  //     this.setState({ search: e.target.value });
  //   };

  render() {
    return this.state.beers ? (
      <div className="full-selection">
        <h1 className="title">Full selection of beers</h1>
        {/* <SearchBar handleChange={this.handleInput} /> */}
        {this.state.beers.map((beer, i) => (
          <div className="single-beer" key={i}>
            <div className="beers-list-container">
              <img className="all-beers-img" src={beer.image_url} />
              <div id="items">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
                <Link to={`/beer/${beer._id}`}>Link here</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>no, beers, yet...</p>
    );
  }
}
