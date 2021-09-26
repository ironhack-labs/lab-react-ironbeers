import React, { useEffect, useState } from 'react'
import Header from './elements/Header';
import axios from "axios";
import { Link } from "react-router-dom";


export default function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => {
        
        setBeers(res.data)
      })
      .catch(err => console.log(err))
  }, [])

    return ( 
    <div>
        <Header/>
        <div>
            {beers.map(beer => (
            <div key={beer._id}>
                <div>
                    <img  height='200px' src={beer.image_url} alt={beer.name} />
                </div>
                <div>             
                  <Link to={`/beers/${beer._id}`}>
                      <h3>{beer.name}</h3>
                  </Link>
                  <h4><small class="text-muted">{beer.tagline}</small></h4>
                  <p>Created by: {beer.contributed_by}</p>                 
                </div>
            </div>
                )
            )}
        </div>
    </div>
    )
} 