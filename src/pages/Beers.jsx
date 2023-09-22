import React, { useState , useEffect } from 'react'

import NavBar from '../components/NavBar'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Beers() {
  const [beers, setBeers] = useState([])
  const [query, setQuery] = useState('')


  useEffect(()=>{
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response)=>{
      setBeers(response.data)
    })
  },[])
  useEffect(()=>{
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
    .then((res) => {
      setBeers(res.data)
    })
    .catch((error) => {
      console.error('Error beers:', error);
    })
  },[query])





  return (
    <div > 
        <NavBar></NavBar>
        
        <h2>All Beers</h2>

        <input type="text" placeholder='Search for beers' value={query} onChange={(e) => setQuery(e.target.value)}/>

        {beers.map((oneBeer)=>{
          console.log(oneBeer)
          return(
            <div key={oneBeer._id}>
                <Link to={`/beers/${oneBeer._id}`}>
                <img src={oneBeer.image_url} alt="" />
                <h1>{oneBeer.name}</h1>
                <p>{oneBeer.tagline}</p>
                <p>Created by: {oneBeer.contributed_by}</p>
                </Link>
            </div>
          )
        })}


        </div>
  )
}

export default Beers