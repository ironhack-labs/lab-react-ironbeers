import React, { Component } from "react";
import axios from "axios"

export default class RandomBeer extends Component {
  state = {
    beer: []
  };

  getSingleBeer() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      )
      .then(response => {
        const beer = response.data;
        this.setState({
          beer: beer
        });
        console.log("AXIOS", this.props.beer);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getSingleBeer();
    console.log("DIDMONT", this.props.beer);
  }

  render() {
    const beer = this.state.beer;
    console.log("RENDER", beer);
    return (
      <div className="singleBeer">
        <img
          style={{ height: "35vh", paddingBottom: "2vh" }}
          src={beer.image_url}
          alt="beerpic"
        />
        <div className="elementsFromBeer">
          <h1>{beer.name}</h1>
          <h2 style={{ color: "rgb(174,174,174)" }}>
            {beer.attenuation_level}
          </h2>
        </div>
        <div className="elementsFromBeer">
          <p style={{ color: "rgb(174,174,174)" }}>{beer.tagline}</p>
          <p>
            <strong>{beer.first_brewed}</strong>
          </p>
        </div>
        <p style={{ textAlign: "left" }}>{beer.description}</p>
        <p style={{ color: "rgb(174,174,174)", textAlign: "left" }}>
          {beer.contributed_by}
        </p>
      </div>
    );
  }
}
