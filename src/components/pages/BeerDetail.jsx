import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BeerDetail() {

    const [beer, setBeer] = useState(null);

    const { beerId } = useParams();  

    const getBeer = async () => {
        try {
          let response = await axios.get(
            'https://ih-beers-api2.herokuapp.com/beers'
          );
          
          let beer = response.data.find((beer) => beer._id === beerId)
          setBeer(beer);

          console.log(beer)
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getBeer();
      }, [beerId]);

  return (
    
       
                <div className='beer-card'>
                    <div>
                        <img src={beer.image_url} alt="" width={65} /> 
                    </div>
                    <div>
                        <h3>{beer.name}</h3>
                        <h4>{beer.attenuation_level}</h4>


                        <p>{beer.tagline}</p>
                        <b>{beer.first_brewed}</b>
                        
                        <p>{beer.description}</p>

                        <p><b>Created by:</b>{beer.contributed_by}</p>
                       
                    </div>

                    
                </div>
                
         
      
    
  )
}

export default BeerDetail