import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RandomBeer() {
  const [beers, setBeers] = useState(null);
    const { props } = useParams();
    
    const getBeers = async () => {
      try {
        let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${code}`);
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      getBeers();
    }, [props]);

  return (
    <div>
    {beers && (
        <div>
        <img src={beers.image_url} alt="" />
            <h2>{beers.name}</h2>
            <h4>{beers.tagline}</h4>
            <p>{beers.first_brewed}</p>
            <p>{beers.attenuation_level}</p>
            <p>{beers.description}</p>
            <p>{beers.contributed_by}</p>
        </div>
  )
}
    </div>
  )
}

export default RandomBeer