import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BeerCard from '../../components/beer-card/BeerCard'



function AllBeers() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((res) => {
      setBeers(res.data)
    })
    .catch(error => console.error(error))
  }, [])
  
  return (
    <div className='mt-2'>
      {beers ? beers.map((beer) => (
       <BeerCard key={beer._id} {...beer}/>)
      ) : "loading"}
    </div>
  )
}

export default AllBeers