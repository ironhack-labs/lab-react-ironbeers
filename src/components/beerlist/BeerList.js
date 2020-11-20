import axios from 'axios';
import React, { useState, useEffect } from 'react';
import OneBeer from '../onebeer/OneBeer';

function BeerList() {
  const [state, setState] = useState({
    data: [
      {
        image_url: '',
        name: '',
        tagline: '',
        contributed_by: '',
        _id: '',
      },
    ],
  });
  useEffect(() => {
    async function getDataApi() {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setState(response);
    }
    getDataApi();
  }, []);
  return (
    <div>
      {state.data.map((elem, i) => {
        return (
          <OneBeer
            key={i}
            image_url={elem.image_url}
            name={elem.name}
            tagline={elem.tagline}
            contributed_by={elem.contributed_by}
            _id={elem._id}
          />
        );
      })}
    </div>
  );
}

export default BeerList;
