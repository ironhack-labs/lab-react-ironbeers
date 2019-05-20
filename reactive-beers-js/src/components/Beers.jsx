import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';
import BeerLayout from './BeerLayout';

const Beers = ({ beers = [] }) => {
  console.log(beers);
  return (
    <div>
      <Nav />
      {beers.map(beer => {
        return (
          <BeerLayout
            image={beer.image_url}
            name={beer.name}
            tag={beer.tagline}
            contribution={beer.contributed_by}
            id={beer._id}
          />
        );
      })}
    </div>
  );
};

export default Beers;
