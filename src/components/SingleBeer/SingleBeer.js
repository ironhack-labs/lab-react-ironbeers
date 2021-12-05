import React, { useState } from 'react';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BeerView from '../BeerView/BeerView';

const SingleBeer = () => {
  const params = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => {
        console.log('Info single-beer', response.data);
        setBeer(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <BeerView beer={beer}/>
    </div>
  );
};

export default SingleBeer;


