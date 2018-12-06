import React, { Component } from "react";
import Link from "react-router-dom/Link";
import Nav from "../Navbar/Nav.js";
import axios from "axios";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = { randombeer: null };
  }

  getRandomBeer = () => {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(responseFromApi => {
        console.log(responseFromApi);
        this.setState({
          randombeer: responseFromApi.data[0]
        });
      });
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    console.log("bitch");

    return this.state.randombeer ? (
      <div>
        hola
        <div>
        <img src={this.state.randombeer.image_url} alt="imgbeer" />
        <h1>{this.state.randombeer.name}</h1>
        <p>{this.state.randombeer.first_brewed}</p>
        <p>{this.state.randombeer.attenuation_level}</p>
        <p>{this.state.randombeer.tagline}</p>
        <p>{this.state.randombeer.description}</p>
        <p>author: {this.state.randombeer.contributed_by}</p>

                  <Link to='/'>go home</Link>

        
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default RandomBeer;
