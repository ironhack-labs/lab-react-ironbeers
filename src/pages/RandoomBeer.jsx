import React from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

function RandoomBeer() {

    const [randomBeer, setRandomBeer] = useState(null)
   /*  const {beerId} =useParams(); */

    const getBeer = async () => {
        try {
          let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
          setRandomBeer(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      
  useEffect(() => {
    getBeer();
  }, []);

  return (
<div className="RandomBeer">
    {randomBeer && (
      <>
        <h1>{randomBeer.name}</h1>
        <img src={randomBeer.image_url} alt='beer-details'/>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.contributed_by}</p>
       
      </>
    )}
    </div>
  )
}

export default RandoomBeer