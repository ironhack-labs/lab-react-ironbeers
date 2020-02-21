import React, { Component } from "react";
import { randomBeer } from "../services/beerList";

export default class RandomBeer extends Component {
  state = {
    beer: []
  };
  async componentDidMount() {
    const beer = await randomBeer();
    this.setState({ beer });
  }
  render() {

    return (
      <div>
        {this.state.beer.map(e => {
          return (
            <div>
            <h1>{e.name}</h1>
              <img className="imgAll" src={e.image_url} alt="{e.name}" />
              <p>{e.tagline}</p>
              <p>{e.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}


