import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const getAllBeers = async () => {
    try {
      let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);


  return (
    <div>
    <NavBar />
     {beers.map((beer) => {
       return (
         <div key={beer._id}>
         <Link to={`/beers/${beer._id}`}>
         <img src={beer.image_url}></img>
         <h1>{beer.name}</h1>
         <h2>{beer.tagline}</h2>
         <h5>{beer.contributed_by}</h5>
         </Link>
         </div>
       )
     })}
     </div>
  )
}

export default AllBeersPage