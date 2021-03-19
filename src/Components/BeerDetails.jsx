import Header from './../Components/Header';
import React, { Component } from 'react';
import axios from 'axios';

export default class BeerDetails extends Component {
  state = {
    beer: null,
  };
  componentDidMount = () => {
    const beerId = this.props.match.params.beerId;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => this.setState({ beer: res.data }))
      .catch((err) => console.log(err));
  };
  render() {
    if (!this.state.beer) return <h1> Loading. . .</h1>;
    return (
      <div>
      <Header/>
      <div className="beer-details">
      <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
      <div className="firstLine">
        <h2>{this.state.beer.name}</h2>
        <h2 className="light-grey">{this.state.beer.attenuation_level}</h2>
      </div>
      <div className="secondLine">
        <h3 className="light-grey">{this.state.beer.tagline}</h3>
        <h3>{this.state.beer.first_brewed}</h3>
      </div>
      <p>{this.state.beer.description}</p>
      <h4 className="light-grey">{this.state.beer.contributed_by}</h4>
  </div>
  </div>
    );
  }
}
