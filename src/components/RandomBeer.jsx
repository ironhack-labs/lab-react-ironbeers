import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState([]);

    const getFromApi = async () => {
  
    try {
  
      const apiCall = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
  
      setRandomBeer(apiCall.data)
      
    } catch (error) {
      console.log(error)
    } 
  }
  
  useEffect(() => {
    getFromApi()
  }, [])


  return (
    <div>
    <Header/>
        <div>
            {randomBeer.map((randomBeer) => {
                return (
                    <>
                   <img src={randomBeer.image_url} alt="beers"/>
                   <Link to={`/beer/${randomBeer._id}`}><p>{randomBeer.name}</p></Link>
                   <p>{randomBeer.tagline}</p>
                   <p>{randomBeer.contributed_by}</p>
                    </>
                )
            })}

        </div>
       
    </div>
  )
}

export default RandomBeer