import React from 'react';
import { Link } from 'react-router-dom';

const beerDetails = (props) => {
  console.log(' beer details: ');
  let beerDetails = null;

  if (props.isRand) {
    // const randID = Math.floor(Math.random() * props.beers.length);
    beerDetails = props.randBeer;
    console.log(beerDetails);
  } else {
    const beerId = props.match.params.id;
    beerDetails = props.beers.filter((eachBeer) => eachBeer._id === beerId);
    beerDetails = beerDetails[0];
  }

  console.log('Beer Information:  ', beerDetails);

  return (
    <div>
      <img src={beerDetails.image_url} alt=" " />
      <h3> {beerDetails.name} </h3>
      <strong> {beerDetails.tagline} </strong>
      <blockquote> {beerDetails.first_brewed} </blockquote>
      <p> {beerDetails.description} </p>
      <h5> {beerDetails.attenuation_level} </h5>
      <i> {beerDetails.contributed_by} </i>
      <Link to="/all-beers"> All Beers </Link>
    </div>
  );
};

export default beerDetails;
