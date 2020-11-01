import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function SingleBeer(props) {
  const [beerDetail, setBeerDetail] = useState();

  useEffect(() => {
    let beerId = props.match.params.beerId;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeerDetail(response.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  if (!beerDetail) return null;
  const {
    name,
    description,
    tagline,
    first_brewed,
    attenuation_level,
    contributed_by,
    image_url,
  } = beerDetail;
  return (
    <>
     
      <div style={{ border: '1px solid black' }}>
        <img alt="" style={{ width: '35px' }} src={image_url}></img>
        <h1>{name}</h1>
        <p>{tagline}</p>
        <p>{description}</p>
        <p>{first_brewed}</p>
        {attenuation_level}
        {contributed_by}
      </div>
    </>
  );
}
