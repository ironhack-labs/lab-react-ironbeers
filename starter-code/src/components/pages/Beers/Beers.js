import React, { Component } from "react";
import BeerCard from "../../BeerCard/BeerCard";
import axios from "axios";
import "./beers.css";

export class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/beers/`)
      .then(response =>
        this.setState({
          beers: response.data
        })
      )
      .catch(error => error);
  }

  render() {
    if (this.state.beers.length === 0) {
      return (
        <div className="loading">
          <h3>LOADING BEERS</h3>
        </div>
      );
    } else {
      return (
        <div className="beers">
          {this.state.beers.map(beer => (
            <BeerCard
              key={beer.name}
              name={beer.name}
              tagline={beer.tagline}
              image_url={beer.image_url}
              created_by={beer.contributed_by}
              id={beer._id}
            />
          ))}
        </div>
      );
    }
  }
}

export default Beers;
