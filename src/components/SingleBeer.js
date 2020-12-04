import React from 'react';
import Header from './Header'

export default function SingleBeer(props) {

    const beer = props.beer
    // console.log('beer from single beer props', beer);
  return (
    <>
      <div className='single-beer'>
        <img src={beer.image_url} alt="" width="100px" />
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </>
  );
}
