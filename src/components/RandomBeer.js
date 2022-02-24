
import axios from 'axios';
import React, { useState, useEffect } from 'react'


function RandomBeer() {

    
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then((x) => {
      setBeer(x.data)
    
    })
  }, [])



  return (

   <>{beer && <div><h1>{beer.name}</h1> {beer.description}</div>}</>
  );
  }

export default RandomBeer;
