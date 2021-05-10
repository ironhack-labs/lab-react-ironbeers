import React, { Component } from 'react'
import axios from "axios";


 class Beer extends Component {


  state = {
    beer: null,
  }



componentDidMount(){

    const id = this.props.match.params.id;

  axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((beer) => {
      console.log(beer.data);
      this.setState({ beer: beer.data });
    })
    .catch((error) => {
      console.log(error);
    });
}

  render() {
    if (this.state.beer === null) {
      return <div>Loading...</div>;}

    return (
      <div>
        <img src={this.state.beer.image_url} alt=""/>
        <div>
        <h2>{this.state.beer.name} </h2> <h2><p>{this.state.beer.attenuation_level}</p></h2>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
        <h3>first Brewed Date: {this.state.beer.first_brewed}</h3>
        </div>
      </div>
    )
  }
}


export default Beer;