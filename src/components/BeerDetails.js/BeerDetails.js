import React from 'react';
import NavBar      from '../NavBar';
import BeerContent from './BeerContent';
import GoBack from '../GoBack';

const BeerDetails = ({beers, match, history}) => (
  <div className="page">
    <NavBar />
    <main>
      <GoBack history={history} />
      {(match.params.id ? beers.filter( beer => beer._id === match.params.id ) : beers)
        .map( beer => (
          <BeerContent
            key    = {beer._id}
            id     = {beer._id}
            img    = {beer.image_url}
            name   = {beer.name}
            level  = {beer.attenuation_level}
            tag    = {beer.tagline}
            brewed = {beer.first_brewed}
            info   = {beer.description}
            author = {beer.contributed_by}
          />
        ))
      }
    </main>
  </div>
);

export default BeerDetails;