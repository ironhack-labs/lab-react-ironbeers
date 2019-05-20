import React, { Component } from 'react';

const BeerDetailLayout = ({ url, name, brewed, attLvl, tag, desc, contribution }) => (
  <div>
    <img src={url} height="200px" alt="beer" />
    <h1>{name}</h1>
    <h2>{brewed}</h2>
    <h2>{attLvl}</h2>
    <h3>{tag}</h3>
    <p>{desc}</p>
    <p>
      <b>Created By:</b>
      {contribution}
    </p>
  </div>
);

export default BeerDetailLayout;
