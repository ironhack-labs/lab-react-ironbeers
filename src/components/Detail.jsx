import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleBeer from './SingleBeer';

const Detail = ({ match }) => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${match.params.id}`)
      .then((response) => setBeer(response.data))
      .catch((err) => console.log(err));
    // return () => { } // Cleanup function
  }, [match.params.id]);

  if (beer.length === 0) {
    return <div>Currently brewing...</div>;
  }
  return (
    <div>
      <SingleBeer beer={beer} />
    </div>
  );
};

export default Detail;
