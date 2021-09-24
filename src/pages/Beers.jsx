import React from 'react'
import Header from '../components/Header';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link, Route } from "react-router-dom";


export default function Beers() {
  const [beers, setBeers] = useState([]);
  
      async function fetchData() {
    const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
    // console.log(response.data)
    setBeers(response.data)
  }

useEffect(()=>fetchData()
, [])


    return ( 
    <div >
        <Header />
        <div className='main-beer-container'>
            {beers.map((beer) => (
            <div key={beer._id} className="card" className='beer-container'>
              <img  height='250px' src={beer.image_url} alt="beers" />
              <div>             
                  <Link to={`/beers/${beer._id}`}>
                      <h3>{beer.name}</h3>
                  </Link>
                  <p>{beer.tagline}</p>
                  <p>Created by: {beer.contributed_by}</p>                 
              </div>
            </div>
                  )) }
        </div>
    </div>
    )
}