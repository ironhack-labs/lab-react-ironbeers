import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const NewBeer = () => {
  const [beer, setBeer] = useState({
    name: '',
    image_url: '',
    tagline: '',
    contributed_by: '',
    attenuation_level: 0,
    first_brewed: '',
    description: '',
  });

  useEffect(() => {
    axios
      .post('/new')
      .then((res) => {
        console.log(res);
        setBeer(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default NewBeer;
