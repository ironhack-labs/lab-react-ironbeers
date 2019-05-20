import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const SingleBeer = ({ beers = [], match = {} }) => {
  const beerId = match.params.beerId;
  console.log(beerId, 'this is the id');
  console.log(match);
  const beer = beers.find(beer => beer._id === beerId);
  // const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = beer;
  console.log(beer, 'this is beer');
  return (
    <div>
      <img src={beer.image_url} height="200px" alt="beer" />
      <h1>{beer.name}</h1>
      <h2>{beer.first_brewed}</h2>
      <h2>{beer.attenuation_level}</h2>
      <h3>{beer.tagline}</h3>
      <p>{beer.description}</p>
      <p>
        <b>Created By:</b>
        {beer.contributed_by}
      </p>
    </div>
  );
};

export default withRouter(SingleBeer);
// export default SingleBeer;
