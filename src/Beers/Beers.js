import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Beers.css"
import { Link } from 'react-router-dom';
import Header from "../Header/Header"


const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        console.log(response);
        setBeers([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
      <div className="Beers">
      <Header />
      <ul>
        {beers.map((beer) => 
         <li>
         <div className="beerCard" key={beer._id}> 
        <div><img src={beer.image_url} alt="beer"  /></div> 
        <div className="text">
        <h2>{beer.name}</h2>
        <h5>{beer.tagline}</h5>
        <p>Created by: {beer.contributed_by}</p>
        <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
        </div> </div>
        </li>   
        )}
      </ul></div>
    )
  }

  export default Beers;