import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRandomBeer, getBeerID } from '../services/IronBeersAPI';

class BeerDetails extends Component {
  state = {
    beerInfo: [],
  };

  componentDidMount = () => {
    if (this.props.isRand) {
      getRandomBeer()
        .then((beerInfo) => {
          this.setState({ beerInfo });
        })
        .catch((error) => console.log(error));
    } else {
      console.log(this.props.match.params.id);
      getBeerID(this.props.match.params.id)
        .then((beerInfo) => {
          this.setState({ beerInfo });
        })
        .catch((error) => console.log(error));
    }
  };

  render = () => {
    console.log(' beer details: ', this.state.beerInfo);
    return (
      <div>
        <img src={this.state.beerInfo.image_url} alt=" " />
        <h3> {this.state.beerInfo.name} </h3>
        <strong> {this.state.beerInfo.tagline} </strong>
        <blockquote> {this.state.beerInfo.first_brewed} </blockquote>
        <p> {this.state.beerInfo.description} </p>
        <h5> {this.state.beerInfo.attenuation_level} </h5>
        <i> {this.state.beerInfo.contributed_by} </i>
        <Link to="/beers"> All Beers </Link>
      </div>
    );
  };
}

export default BeerDetails;
