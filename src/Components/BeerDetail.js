import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class BeerDetail extends Component {
  state = {
    oneBeer: [],
  };

  componentDidMount() {
    this.getBeer();
  }

  getBeer = () => {
    const { params } = this.props.match;
    axios
      .get(`https://api.punkapi.com/v2/beers/${params.id}`)
      .then((responseFromApi) => {
        this.setState({ oneBeer: responseFromApi.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Nav />
        {this.state.oneBeer.map((beer, index) => {
          return (
            <div className="single-beer-details" key={index}>
              \<h1>BEER DETAILS</h1>
              <img src={beer.image_url} alt="" />
              <h1> {beer.name} </h1>
              <h2> {beer.tagline} </h2>
              <h4>{beer.first_brewed}</h4>
              <i>{beer.attenuation_level}</i>
              <p> {beer.description} </p>
              <p> {beer.contributed_by} </p>
              <Link to={'/beers'}> Go Back </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BeerDetail;
