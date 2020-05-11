import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((apiResponse) => {
        console.log(apiResponse.data);
        this.setState({ beers: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }
  render() {
    return (
      <div className="container">
        {this.state.beers.map((beer, index) => (
          <div key={index} className="beer-cards">
            <p>
              {beer.name} <Link to={`/${beer._id}`}>See more</Link>
            </p>
            <img src={beer.image_url} className="beer-img" alt="" />
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Beers;
