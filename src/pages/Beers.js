import React from 'react'
import Header from '../components/Header';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export default function Beers() {
  const [beers, setBeers] = useState([]);
  
  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response.data)
        setBeers(response.data)
      })
      .catch(err => console.log(err))
  }, [])

    return ( 
    <div>
        <Header />
        <div className='beers-container'>
            {beers.map(beer => (
            <div key={beer._id} className='beer-container'>
                <div className="left">
                    <img  height='200px' src={beer.image_url} alt={beer.name} />
                </div>
                <div className="right">             
                  <Link className ="link" to={`/beers/${beer._id}`}>
                      <h3>{beer.name}</h3>
                  </Link>
                  <h4>{beer.tagline}</h4>
                  <p>Created by: {beer.contributed_by}</p>                 
                </div>
            </div>
                )
            )}
        </div>
    </div>
    )
}