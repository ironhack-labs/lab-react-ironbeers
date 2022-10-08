import React from 'react'
import { useState, useEffect } from "react";    
import axios from "axios";   

const BeersList = () => {
    const [beer, setBeer] = useState([]);
 
  useEffect(() => {                            
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeer(response.data)
      });
    
  }, [] );
  return (
    <div>
 
    {beer.map((beers) => (
      <div key={beers._id} className="card">
      <div className='card-image'>
        <img src={beers.image} alt="beers" />
      </div>
      <div className='card-contet'>
        <h3>{beers.name}</h3>
        <p>{beers.tagline}</p>
        <strong>Created By: {beers.contributed_by}</strong>
        <br></br><br></br>
        <a href='/beers/:beerId' className='btn'>Details</a>
        <br></br><br></br>
      </div>
      </div>
    ))}
    
  </div>
  )
}

export default BeersList