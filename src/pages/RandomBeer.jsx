import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState(null);

useEffect(()=>{
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(response=>{
        setRandomBeer(response.data)
       })
       .catch(error => {
           console.log(error);
         });
       
     }, []);

    return (
        <div>
           <div>
      {randomBeer && <div>
        <img alt='beerImg' src={randomBeer.image_url}></img>
        <h1>{randomBeer.name}</h1>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
        </div>
        }
    </div>
            
        </div>
    );
};

export default RandomBeer;