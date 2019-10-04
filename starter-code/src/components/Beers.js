
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  state = {
    beer: [],
    search: ""
  };

  getBeerData = () => {
    axios.get("http://localhost:5000/all").then(response => {
      console.log(response.data);
      this.setState({
        beer: response.data
      });
    });
  };

  componentDidMount() {
    this.getBeerData();
  }

  handleSearch = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  render() {
    const filteredBeer = this.state.beer.filter(el => {
      return el.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    const specificBeer = filteredBeer.map(el => {
      return (
        <Link to={`/beers/${el._id}`}>
          <div className="beer-component" key={el._id}>
            <img height="300px" src={el.image_url} alt="" />
            <div className="beer-text">
              <h3>{el.name}</h3>
              <h4>{el.tagline}</h4>
              <h6>Created by: {el.contributed_by}</h6>
            </div>
          </div>
          <hr />
        </Link>
      );
    });

    return (
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          value={this.state.search}
          onChange={this.handleSearch}
        />
        {specificBeer}
      </div>
    );
  }
}