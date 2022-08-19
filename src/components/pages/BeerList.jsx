import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

function BeerList() {

    const [beers, setBeers] = useState([])

    const getBeers = async () => {
        try {
          let response = await axios.get(
            'https://ih-beers-api2.herokuapp.com/beers'
          )
          console.log(response.data);
    
          setBeers(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getBeers();
      }, []);
  return (
    <div>
        {beers.map((beer) => {
            return (
                <div key={beer._id} className='beer-card'>
                    <div>
                        <Link to={`/beers/${beer._id}`}> <img src={beer.image_url} alt="" width={65} /> </Link>
                    </div>
                    <div>
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p><b>Created by:</b>{beer.contributed_by}</p>
                    </div>

                    
                </div>
                
            )
        })}
        
    </div>
  )
}

export default BeerList