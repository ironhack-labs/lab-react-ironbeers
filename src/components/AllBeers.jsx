import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

function AllBeers() {
    const [beers, setBeers] = useState([])

    const getFromApi = async () => {
  
    try {
  
      const apiCall = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
  
      setBeers(apiCall.data)
      
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
            {beers.map((beers) => {
                return (
                    <>
                   <img src={beers.image_url} alt="beers"/>
                   <Link to={`/oneBeer/${beers._id}`}><p>{beers.name}</p></Link>
                   <p>{beers.tagline}</p>
                   <p>{beers.contributed_by}</p>
                    </>
                )
            })}

        </div>
       
    </div>
  )
}

export default AllBeers