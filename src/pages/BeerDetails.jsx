import React, { Component } from 'react';
import ironbeersApi from '../api/apiHandler';
import '../beer_details.css';
import LoadingSpinner from '../Components/LoadingSpinner';

export default class BeerDetails extends Component {
  state = {
    beer: null,
  };

  fetchBeer(beerId) {
    ironbeersApi
      .getBeerDetails(this.props.match.params.id)
      .then(({ data: fetchedBeer }) => {
        this.setState({
          beer: fetchedBeer,
        });
      });
  }

  fetchRandomBeer() {
    ironbeersApi.getRandomBeer().then(({ data: fetchedBeer }) => {
      this.setState({
        beer: fetchedBeer,
      });
    });
  }

  componentDidMount = () => {
    this.props.getCurrentPath(this.props.match.path);
    const beerId = this.props.match.params.id;
    if (beerId) {
      this.fetchBeer(beerId);
    } else {
      this.fetchRandomBeer();
    }
  }

  render() {
    const beer = this.state.beer;

    if (beer === null) {
      return <LoadingSpinner />;
    } else {
      return (
        <div className="beer-details-grid">
          <img src={beer.image_url} alt="Beer" />
          <h2 className="name">{beer.name}</h2>
          <p className="attenuation">{beer.attenuation_level}</p>
          <p className="tagline">{beer.tagline}</p>
          <p className="brewed">{beer.first_brewed}</p>
          <p className="desc">{beer.description}</p>
          <p className="contributed">{beer.contributed_by}</p>
        </div>
      );
    }
  }
}
