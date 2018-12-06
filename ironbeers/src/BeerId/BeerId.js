import React, { Component } from "react";
import Link from "react-router-dom/Link";
import Nav from "../Navbar/Nav.js";
import axios from "axios";

class BeerId extends Component {
  constructor() {
    super();
    this.state = { beerInfo: null };
  }

  getBeerInfo = () => {
    axios
      .get(
        `https://ironbeer-api.herokuapp.com/beers/single/${
          this.props.match.params.id
        }`
      )
      .then(responseFromApi => {
        console.log(responseFromApi);
        this.setState({
          beerInfo: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getBeerInfo();
  }

  render() {
    console.log("bitch");

    return this.state.beerInfo ? (
      <div>
        hola
        <div>
        <img src={this.state.beerInfo.image_url} alt="imgbeer" />
        <h1>{this.state.beerInfo.name}</h1>
        <p>{this.state.beerInfo.first_brewed}</p>
        <p>{this.state.beerInfo.attenuation_level}</p>
        <p>{this.state.beerInfo.tagline}</p>
        <p>{this.state.beerInfo.description}</p>
        <p>author: {this.state.beerInfo.contributed_by}</p>

                  <Link to='/'>go home</Link>

        
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default BeerId;
