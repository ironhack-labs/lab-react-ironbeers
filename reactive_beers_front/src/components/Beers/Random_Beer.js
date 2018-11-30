import React, { Component } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: {}
    };
  }

  componentWillMount() {
    const base_url = "https://ironbeer-api.herokuapp.com/beers";
    axios.get(`${base_url}/random`).then(res => {
      this.setState({ randomBeer: res.data[0] });
    });
  }

  render() {
    const { randomBeer } = this.state;
    console.log(randomBeer);
    return (
      <div>
        <Nav />
        <div>
          <img src={randomBeer.image_url} alt="cerveza" style={{ maxWidth: "18%" }} />
          <h1>{randomBeer.name}</h1>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.tagline}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
