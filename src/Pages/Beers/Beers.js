
import { useState, useEffect } from 'react'
import React from "react";
import axios from 'axios'
import './Beers.css'
import { Link } from 'react-router-dom'


const Beers = (props) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response);
        setBeers(response.data);
      })
      .catch(err => console.log(err));
  }, [])


  return (

    <div>
      <div>

        <div>
          {beers.map((beer) => (
            <div key={beer._id} className='BeerContainer'>
              <div>
                <img className="BeerImg" src={beer.image_url} alt="beer-img" />
              </div>
              <div className='BeerInfo'>
                <h2> {beer.name} </h2>
                <h3> {beer.tagline} </h3>
                <h5> {beer.contributed_by} </h5>
                <Link to={`/beers/${beer._id}`} className="BeerDetails">Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beers;