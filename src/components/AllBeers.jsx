import React from 'react'
import NavBar from './NavBar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllBeers() {
  const [allBeers, setAllBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
      setAllBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);


  return (
    <div>
   <NavBar/>
      {allBeers.map((eachBeer) => {
        return (
              <div>
              <Link to={`/single-beer/${eachBeer._id}`}>
                <img src={eachBeer.image_url} alt="beer" />
                <h1>{eachBeer.name}</h1>
                <h3>{eachBeer.tagline}</h3>
                <p>{eachBeer.contributed_by}</p>
                </Link>
                <hr/> 
              </div>
            )
          })}
    </div>
  )
}

export default AllBeers 
