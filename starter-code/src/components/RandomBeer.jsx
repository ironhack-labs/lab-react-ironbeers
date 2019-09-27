import React, { Component } from "react";
import axios from "axios";

export default class RandomBeer extends Component {
  state = {
    randomBeer: []
  };

  getRandomBeer = () => {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers/random")
      .then(response => {
        const randBeer = response.data;
        this.setState({
          randomBeer: randBeer
        });
      });
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    const beer = this.state.randomBeer;
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px 0"
          }}
        >
          <div>
            {
              <img
                style={{ height: "200px" }}
                src={beer.image_url}
                alt="beer-img"
              />
            }
          </div>

          <div>
            <strong>Name </strong>
            <p>{beer.name}</p>
            <strong>Tagline </strong>
            <p>{beer.tagline}</p>
            <strong>First Brewed </strong>
            <p>{beer.first_brewed}</p>
            <strong>Attenuation Level </strong>
            <p>{beer.attenuation_level}</p>
            <strong>Description </strong>
            <p style={{ width: "300px" }}>{beer.description}</p>
            <strong>Contributed by </strong>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
        <hr></hr>
      </>
    );
  }
}
