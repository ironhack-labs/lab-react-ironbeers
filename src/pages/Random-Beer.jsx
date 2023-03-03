import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../components/Header";
import { Link, useParams } from 'react-router-dom';

function RandomBeer() {

    const [oneBeer, setBeer] = useState(null);
   
  
    const getBeers = async ()=>{
        
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
           setBeer(response.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => { 
        getBeers()
    }, []);

    console.log(oneBeer)
  return (
    <div>
      <Header />

      <div className='cList'>
      {oneBeer && 
        
          <Link to={`/${oneBeer._id}`}>
          <div className='myCard'>
            <img className="beerImage"
              src={oneBeer.image_url}
              alt={oneBeer.name}
            />
            <p>{oneBeer.tagline}</p>
            <p>Created by: {oneBeer.contributed_by}</p>
          </div>
          </Link>
    
      }

    </div>
    </div>
  );
    }
export default RandomBeer