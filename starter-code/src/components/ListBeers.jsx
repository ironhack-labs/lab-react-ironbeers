import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ListBeers extends Component {
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
    return (
      <div className="App">
        {this.state.beers.map(beer => (
          <div>
            <h1>{beer.name}</h1>
            <img src={beer.image_url} alt="broken" height="200px"></img>
            <h1>Tagline: {beer.tagline}</h1>
            <h1>Contributed by: {beer.contributed_by}</h1>
            <Link to={"/beers/" + beer._id}> see Details of this one</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ListBeers;
