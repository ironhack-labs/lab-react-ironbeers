import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const RandomBeerLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class RandomBeer extends Component {
  state = {
    beer: {}
  };
  async componentDidMount() {
    const { data } = await axios.get("https://api.punkapi.com/v2/beers/random");
    console.log(data);
    this.setState({
      beer: data[0]
    });
  }

  render() {
    return (
      <RandomBeerLayout>
        <img src={this.state.beer.image_url} alt="birruela" />
        <div>
          <h2>{this.state.beer.name}</h2>
          <h3>{this.state.beer.attenuation_level}</h3>
        </div>
        <div>
          <h5>{this.state.beer.tagline}</h5>
          <p>{this.state.beer.first_brewed}</p>
        </div>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </RandomBeerLayout>
    );
  }
}
