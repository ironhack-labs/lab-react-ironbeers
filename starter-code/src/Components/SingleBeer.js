import React, { Component } from "react";
import NavBar from "./NavBar";
import axios from "axios";

export default class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
        beer: []
    }

  }
  setDetailMovie() {
      let beerID = this.props.beer
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerID}`)
      .then(responseFromApi => {
          console.log(responseFromApi.data)
        this.setState({
          beer: responseFromApi.data
        });
    })}

    componentDidMount() {
        this.setDetailMovie();
      }

  render() {

    return (
      <div>
        <NavBar></NavBar>
        <h1>Single-Beer</h1>
        <img src={this.state.beer.image_url} width ="100px" alt={this.state.beer.name}/>
        <h2>{this.state.beer.name}</h2>
        <h5>{this.state.beer.tagline}</h5>
        <h6>{this.state.beer.first_brewed}</h6>
        <h6>{this.state.beer.attenuation_level}</h6>
        <p>{this.state.beer.description}</p>
        <h6>{this.state.beer.contributed_by}</h6>
      </div>
    );
  }
}
