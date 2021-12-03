import { useParams } from 'react-router-dom';
import React from 'react';
import Header from './Header/Header';

const SingleBeer = (props) => {
  const params = useParams();

  const currentBeer = props.beers.filter((beer) => {
    return beer._id === params.id;
  });

  return (
    <>
      <Header />

      <div className="SingleBeer">
        <img src={currentBeer[0].image_url} alt={currentBeer[0].name} />
        <h1>{currentBeer[0].name}</h1>
        <p>{currentBeer[0].tagline}</p>
        <p>{currentBeer[0].first_brewed}</p>
        <p>{currentBeer[0].first_brewed}</p>
        <p>{currentBeer[0].attenuation_level}</p>
        <p>{currentBeer[0].description}</p>
        <p>{currentBeer[0].contributed_by}</p>
      </div>
    </>
  );
};
export default SingleBeer;
