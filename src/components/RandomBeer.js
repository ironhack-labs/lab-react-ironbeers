//jshint esversion:9

import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

  

export const RandomBeer = () => {

  const [beer, setBeer] = useState({});


  useEffect(()=>{

    (async () => {

      let randomNum;

      let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`);

      randomNum = Math.floor(Math.random() * response.data.length);

      setBeer(response.data[randomNum]);

    })();

  },[]);


  return (

    <div className="beer-details-container" >
      <nav>
          <Link to="/"> <h3>Home</h3> </Link>
      </nav>
  

      <div className='beers-beer-img-container'>
          <img src={beer.image_url} alt="beer" style={{height: "350px"}}/>
      </div>
      
      <div className="beers-beer-info">

          <div>
              <h2 className='beers-beer-info-name'>{beer.name}</h2>

              <p className='beers-beer-tagline'>{beer.attenuation_level}</p>
          </div>

          <div>

              <p className='beers-beer-tagline'>{beer.tagline}</p>

              <p className='beers-beer-tagline'>{beer.first_brewed}</p>

          </div>
          
          <p className=''>{beer.description}</p>

          <p>{beer.contributed_by}</p>
          
      </div>

    </div> 
  )
}
