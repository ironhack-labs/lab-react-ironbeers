import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NewBeer from './Components/Newbeer';

function Beers() {
    const [beers, setBeers] = useState([]); 

    useEffect(() => {
        axios
          .get('https://ih-beers-api2.herokuapp.com/beers')
          .then((response) => {
            setBeers(response.data);
          })
          .catch((err) => console.log(err));
      }, []);
    
  return (
    <div>
        <div style={{width: "100%"}} className="bg-primary" >
        <Link className='text-light' to="/">Home</Link>

        </div>
        <hr />
    {beers.map((beer) => {
      return (
        <div className='container bg-light' >
        <Link key={beer._id} to={`/${beer.alpha3Code}`}>
            <div className='row align-items-start' >
          <div className='col' >
            <img
            className='row justify-content-start"'
              src={beer.image_url}
              alt=""
            />
            </div>  
        <div className='col'>
        <div className='text-dark'>

            <h1 className='row justify-content-center'>{beer.name}</h1>
            <br />
            <h2 className='row justify-content-center'>{beer.tagline}</h2>
            <br />
            <h3 className='row justify-content-center'>{beer.contributed_by}</h3>

        </div>
        </div>
        </div>
    
        </Link>
        </div>
      );
    })}
  </div>
);
}
export default Beers;