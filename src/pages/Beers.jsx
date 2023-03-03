import React from 'react'
import { useState, useEffect, useContext } from 'react';

import axios from 'axios';


function Beers() {
    const [beers, setBeers] = useState([]);
  
const getBeers = async () => {
    try {
      let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");

      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);
  
    return (
        <div >
        <h3>All Beers</h3>
        {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt="beers" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </div>
      )
      )
      }
     
    </div>
  );
}
  

export default Beers