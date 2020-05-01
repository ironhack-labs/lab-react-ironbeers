import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

export default class Beers extends Component {
  state = {
    beers: [],
    search: "",
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        this.setState({ beers: response.data, filteredBeers: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleInputSearch = (e) => {
    const searchValue = e.target.value;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchValue}`)
      .then((response) => {
        this.setState({ beers: response.data, search: searchValue });
      });
  };

  render() {
    return (
      <div>
        <HomeHeader />
        <div className="beers-container">
          <div className="add-beer-container ">
            <label htmlFor="search">search</label>
            <input
              type="text"
              value={this.state.search}
              name="search"
              onChange={this.handleInputSearch}
            />
          </div>
          {this.state.beers.length > 0 &&
            this.state.beers.map((beer, index) => {
              return (
                <Link key={index} to={`/single-beer/${beer._id}`}>
                  <div className="beers-images">
                    <img src={beer.image_url} alt={beer.name} />
                  </div>
                  <div className="beers-info">
                    <div className="beers-info-name">{beer.name}</div>
                    <div className="beers-info-tagline">{beer.tagline}</div>
                    <div className="beers-info-contribute">
                      created by: {beer.contributed_by}
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}
