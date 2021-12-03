import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export const Beer = (props) => {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    const url = props.random
      ? `https://ih-beers-api2.herokuapp.com/beers/random`
      : `https://ih-beers-api2.herokuapp.com/beers/${id}`;
    if (props.random) {
    }
    axios.get(url).then((res) => setBeer(res.data));
  }, [id, props.random]);

  return (
    <div>
      <img style={{ height: '400px' }} src={beer.image_url} alt="" />
      <h1>{beer.name}</h1>
      <h3>{beer.tagline}</h3>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
};
