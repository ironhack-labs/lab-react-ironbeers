import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';

class BeerDetails extends React.Component {
  render() {
    const beerDetails = this.props.beers.filter(beer => beer._id===this.props.match.params.beer)[0];
    return (
      <div className="details">
      <Header />
        <img src={beerDetails.image_url} alt={beerDetails.name} />
        <div>
          <h1><span>{beerDetails.name}</span><span>{beerDetails.attenuation_level}</span></h1>
          <p><span>{beerDetails.tagline}</span><span>{beerDetails.first_brewed}</span></p>
          <p>{beerDetails.description}</p>
          <p>{beerDetails.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
