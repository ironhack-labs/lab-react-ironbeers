import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar';

function Beers() {
   const [beers, setBeers] = useState([]);

    const getFromAPI = async () => {
        try {
        const apiCall = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      
        setBeers(apiCall.data)
        } catch (error) {
          console.log(error);
        }};

      useEffect(() => {
          getFromAPI();
      }, []);
    

  return (
    <div>
        < Navbar/>
      {beers.map((eachbeer) => 
        { return (
            <div>
                <img src={eachbeer.image_url}
                alt={eachbeer.name}/>
                <Link to={`/Beerdetails/${eachbeer._id}`}>Name: {eachbeer.name}</Link>
                <p>Tagline: {eachbeer.tagline} </p>
                <p>Contributed_by: {eachbeer.contributed_by} </p>
            </div>    
            );
      })}
    </div>
  )
}

export default Beers