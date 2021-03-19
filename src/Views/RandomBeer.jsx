import React from 'react'
import { NavLink } from 'react-router-dom';
import axios from "axios"

class RandomBeer extends React.Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    const id = this.props.match.params.random;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log(response.data);
        this.setState({ beer: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <header>
          <NavLink to="/">Back HomePage</NavLink>
        </header>
        <h1>RANDOM beer Details !!</h1>
        <div>
          <img src={this.state.beer.image_url} alt="" />
          <br />
          <p>Name: {this.state.beer.name}</p>
          <p>Tagline: {this.state.beer.tagline}</p>
          <p>Brewed: {this.state.beer.first_brewed}</p>
          <p>Attenuation level: {this.state.beer.attenuation_level}</p>
          <p>Description: {this.state.beer.description}</p>
          <p>Contrinuted by: {this.state.beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}
   

export default RandomBeer
