import React, { Component } from 'react';
import BeerDetailLayout from './BeerDetailLayout';
import { withRouter } from 'react-router-dom';

const SingleBeer = ({ beers = [], match = {}, history }) => {
  const beerId = match.params.beerId;
  if (!beerId) history.push('/');
  console.log(beerId, 'this is the id');
  console.log(match);
  const beer = beers.find(beer => beer._id === beerId);
  // const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = beer;
  console.log(beer, 'this is beer');
  return (
    <>
      {beer && (
        <BeerDetailLayout
          url={beer.image_url}
          name={beer.name}
          brewed={beer.first_brewed}
          attLvl={beer.attenuation_level}
          tag={beer.tagline}
          desc={beer.description}
          contribution={beer.contributed_by}
        />
      )}
    </>
  );
};

export default withRouter(SingleBeer);
