import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SearchBeer from "../components/SearchBeer";

export default class ListBeers extends Component {
  state = {
    APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers/"
  };
  callBeers = () => {
    return axios
      .get(this.state.APIEndpoint)
      .then(apiRes => this.setState({ beers: apiRes.data }))
      .catch(apiErr => console.error(apiErr));
  };
  componentDidMount() {
    this.callBeers();
  }
  handleSearch = e => {
    console.log(e.target.value);
    this.setState({
      APIEndpoint:
        "https://ih-beers-api2.herokuapp.com/beers/search?q=" + e.target.value
    });
    this.callBeers();
    console.log(this.state.APIEndpoint);
  };
  //componentWillUpdate() {}
  render() {
    return (
      <>
        <SearchBeer callback={this.handleSearch} />
        <div id="beers">
          {this.state.beers ? (
            this.state.beers.map((beer, i) => (
              <div className="beer" key={i}>
                <NavLink to={"/beers/" + beer._id}>
                  <img src={beer.image_url} alt={beer.name} />
                </NavLink>
                <div className="details">
                  <h3>{beer.name}</h3>
                  <h4>{beer.tagline && beer.tagline}</h4>

                  {beer.contributed_by && (
                    <h5>
                      <b>Created by:</b> {beer.contributed_by}
                    </h5>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </>
    );
  }
}
