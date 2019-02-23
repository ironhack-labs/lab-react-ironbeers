import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/random").then(response => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    return (
      <div className="RandomBeer">
      <Link to='/'>Back</Link>
        {this.state.beers.map((beer, idx) => {
           return <div key={idx}>
          <img src={beer.image_url} alt=""></img>
          <h1>{beer.name}</h1>
          <span>{beer.tagline}</span>
          <h3>{beer.first_brewed}</h3>
          <p>{beer.description}</p>
          <h3>{beer.first_brewed}</h3>
          <p>Created by: {beer.contributed_by}</p>
          </div>
        })}
      </div>
    );
  }
}
export default RandomBeer;

