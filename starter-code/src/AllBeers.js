import React, { Component } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

export default class AllBeers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        console.log(response);
        this.setState({
          beers: response.data
        });
        console.log("this.state.beeers", this.state.beers);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.beers.map(beer => {
          return (
            <Link key={beer._id} to={`/beers/${beer._id}`}>
              <div>
                <img
                  style={{ height: "40vh" }}
                  src={beer.image_url}
                  alt="beerpic"
                />
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>Created by {beer.contributed_by}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
