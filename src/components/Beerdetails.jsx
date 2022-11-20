import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Header from './Header';


function BeerDetails() {
    const [oneBeer, setOneBeer] = useState({}) 
    const {beerId} = useParams() 

    const getFromApi = async () => {
        try {
          const apiCall = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
          setOneBeer(apiCall.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getFromApi()
       }, [beerId]);

  return (
    <div>
        {oneBeer && (   
            <div>
                <Header/>

                <img src={oneBeer.image_url} alt=""/>
                <h2>{oneBeer.name}</h2>
                <p>{oneBeer.tagline}</p>
                <p>{oneBeer.first_brewed}</p>
                <p>{oneBeer.attenuation_level}</p>
                <p>{oneBeer.description}</p>
                <p>{oneBeer.contributed_by}</p>
            </div>
           )}
        </div>
  )
}

export default BeerDetails