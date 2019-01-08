import React from 'react';
import NavBar   from '../NavBar';
import BeerItem from './BeerItem';
import Search   from './Search';

const Beers = ({beers, onChange}) => (
  <div className="page">
    <NavBar />
    <main>
      <Search onChange={onChange} />
      {beers
        .sort( (a,b) => a.name > b.name ? 1 : -1 )
        .map( beer => (
          <BeerItem
            key    = {beer._id}
            id     = {beer._id}
            img    = {beer.image_url}
            name   = {beer.name}
            tag    = {beer.tagline}
            author = {beer.contributed_by}
          />
        )
      )}
    </main>
  </div>
);

export default Beers;