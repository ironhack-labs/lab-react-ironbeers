import React, { Component } from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      query: ""
    };
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
      this.setState({ beers: response.data });
    });
  }

  handleChange = event => {
    let value = event.target.value;
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/search?q=" + value)
      .then(response => {
        this.setState({ beers: response.data, query: value });
      });
  };

  render() {
    if (this.state.beers.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <input
            type="search"
            onChange={this.handleChange}
            value={this.state.query}
          />
          {this.state.beers.map(beer => (
            <div>
              <Link to={`/beers/${beer._id}`}>
                <h1>{beer.name}</h1>
              </Link>
              <img src={beer.image_url} width={60} height={150} alt="" />
              <p>{beer.tagline}</p>
              <p>Created by: {beer.name}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default AllBeers;
