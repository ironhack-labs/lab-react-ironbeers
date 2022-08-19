import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState(null);  

    const getRandomBeer = async () => {
        try {
          let response = await axios.get(
            'https://ih-beers-api2.herokuapp.com/beers/random'
          );
          setRandomBeer(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getRandomBeer();
      }, []);

  return (
    <div className='beer-card'>
                    <div>
                        <img src={randomBeer.image_url} alt="" width={65} /> 
                    </div>
                    <div>
                        <h3>{randomBeer.name}</h3>
                        <h4>{randomBeer.attenuation_level}</h4>


                        <p>{randomBeer.tagline}</p>
                        <b>{randomBeer.first_brewed}</b>
                        
                        <p>{randomBeer.description}</p>

                        <p><b>Created by:</b>{randomBeer.contributed_by}</p>
                       
                    </div>

                    
                </div>
  )
}

export default RandomBeer