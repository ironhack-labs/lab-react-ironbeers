import React, { Component } from 'react';

import { Link } from 'react-router-dom';

const BeerLayout = ({ image, name, tag, contribution, id }) => (
  <div>
    <img src={image} height="200px" alt="beer" />
    <h1>{name}</h1>
    <h3>{tag}</h3>
    <p>
      <b>Created By:</b>
      {contribution}
    </p>
    <Link to={`/beers/${id}`}>See Details</Link>
  </div>
);

export default BeerLayout;
