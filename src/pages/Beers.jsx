import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom' 



function Beers() {
    const [beerList, setBeerList] = useState([]);

      const getBeers = async () => {
        try {
          let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/`);
          setBeerList(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      
    useEffect(() => {
       getBeers();                
      }, []);  
      

  return (
    <div>

    <h2>Beers</h2>
    {beerList.map((beer) => {
      return (
        <div key={beer._id} className="beer">
          <h3>
            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
          </h3>
          <img src={beer.image_url} alt='BeerList' width={150}/>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
     
        </div>
      );
    })}
  </div>
);
}


export default Beers