import React, { useState, useEffect } from 'react';
import './BeerDetails.css';
import axios from 'axios';

function BeerDetails(props) {
  const [state, setState] = useState({
    data: {
      _id: '',
      name: '',
      tagline: '',
      first_brewed: '',
      description: '',
      image_url: '',
      attenuation_level: '',
      contributed_by: '',
    },
  });
  console.log(state);

  const { id } = props.match.params;

  useEffect(() => {
    async function getBeerDetail() {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );

      console.log(response);
      setState(response.data);
    }

    getBeerDetail();
  }, []);

  return (
    <div className="beer-details">
      <img src={state.image_url}></img>
      <div className="title1">
        <h1>{state.name}</h1>
        <p className="number">{state.attenuation_level}</p>
      </div>
      <div className="title2">
        <h4>{state.tagline}</h4>
        <p className="data">{state.first_brewed}</p>
      </div>
      <div className="text">
        <p>{state.description}</p>
        <p className="contributed">{state.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetails;
