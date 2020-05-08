import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class BeersList extends Component {
  state = {
    beerslist: [],
  };
  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        this.setState({
          beerslist: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.beerslist.map((beer) => {
          return (
            <div key={beer._id} style={{ display: "flex" }}>
              <div style={{ height: "100px" }}>
                <img
                  src={beer.image_url}
                  alt={beer.name}
                  style={{ height: "100%" }}
                />
              </div>
              <div>
                <Link to={`/beer/${beer._id}`}>
                  <h3>{beer.name}</h3>
                </Link>
                <h4>{beer.tagline}</h4>
                <p>
                  <strong>Created by:</strong>
                  {beer.contributed_by}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
