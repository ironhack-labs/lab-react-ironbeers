import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListBeers.css'

function ListBeers() {
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
      <h1 className='text-center mt-5'>List Beers</h1>
      {beers ?
        beers.map((beer)=> {return (
          <div className={`row d-flex justify-content-start align-items-center border border-dark m-5 `} key={beer._id}>
            <div className='col-4 p-0 text-center'>
              <img src={beer.image_url} alt={beer.name} className='img-li'/>
            </div>
            <div className='col-8 p-0 p-3'>
              <h4 className='m-0'>{beer.name}</h4>
              <p className='m-0'>{beer.tagline}</p>
              <p className='fs-6'><strong>Created by:</strong> {beer.contributed_by}</p>
              <Link to={`/beers/${beer._id}`}> <button className='btn btn-primary btn-sm'>See More</button></Link>
            </div>
          </div>
        )})
        :<h4>'Loading'</h4>}
      <Link to='/'>Back</Link>
    </>
  )
}

export default ListBeers