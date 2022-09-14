import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function SingleBeer() {
  const { _id } = useParams();
  const [beers, setBeers] = useState(null)

useEffect(() => {
  axios
  .get('https://ih-beers-api2.herokuapp.com/beers')
  .then((res)=>{
    setBeers(res.data)
  })
  .catch((error)=> console.log(error))
}, [])

console.log(beers)

return (
    <>
      <div>SingleBeer {_id}</div>
      <Link to='/beers'>Back</Link>
    </>
  )
}

export default SingleBeer