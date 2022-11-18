import NavBar from '../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png'
import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect} from 'react';


function Beers() {
 
    const [beers, setBeers] = useState([]);
  
    const getBeers = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
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
    
            <Link to="/">
                <img src={NavBar} alt="" />
            </Link>
          <h3>List of Beers</h3>
          {beers.map((beer) => (
            <div key={beer._id} className="beer">
              <img src={beer.image_url} alt="beer" />
              <h3>{beer.name}</h3>
              <p> {beer.tagline}</p>
              <p>Created by: {beer.contributed_by} </p>

              <Link to={`/beers/${beer._id}`}> <button> See details</button></Link>
            </div>
          ))}
        </div>
      );
    }



        

export default Beers