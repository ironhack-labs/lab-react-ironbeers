import React from 'react';
// import SingleBeersForList from './SingleBeerForList';

function BeerInfo(props) {
  const beer = props.beer;
  // const creator = beer.contributed_by.split(' ').slice(0, 8).join('');
  return (
    <div>
      <div>
        <img src={beer.image_url} alt={beer.name} />
        <h3>{beer.name}</h3>
        <p>
          <em>{beer.tagline}</em>
        </p>
        <ul>
          <li>{beer.first_brewed}</li>
          <li>{beer.attenuation_level}</li>
        </ul>
        <br />
        <p>{beer.description}</p>
        <br />
        <p>
          <strong>Creator | {beer.contributed_by}</strong>
        </p>
      </div>
    </div>
  );
}

export default BeerInfo;
