import React from 'react'
import {Link, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

function BeerDetails() {
    const {beerId} = useParams();
    const [oneBeer, setOneBeer] = useState(null);

    const getFromApi = async () => {
        try {
            const apiCall = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);

            setOneBeer(apiCall.data);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
      getFromApi();
    }, [beerId])
    

  return (
    <div>
    <Header />

    <div>
        {oneBeer &&
        (
            <div>
                <img src={oneBeer.image_url} alt="beers"/>
                   
            <p>{oneBeer.tagline}</p>
            <p>{oneBeer.contributed_by}</p>
            </div>
            
            
        )}
    </div>



    </div>
    
  )
}

export default BeerDetails 