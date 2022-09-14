import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import './SingleBeer.css'

function SingleBeer() {
  const { id } = useParams();
  const [beer, setBeers] = useState(null)

useEffect(() => {
  axios
  .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
  .then((res)=>{
    setBeers(res.data)
  })
  .catch((error)=> console.log(error))
}, [id])

return (
  <>
  {beer ?
    (
      <div className={`row d-flex justify-content-start align-items-center border border-dark m-5 `} key={beer._id}>
        <div className='col-12 p-5 text-center'>
          <img src={beer.image_url} alt={beer.name} className='img-single'/>
        </div>
        <div className='col-12 p-0 p-3'>
          <h4 className='m-0'>{beer.name}</h4>
          <h4 className='m-0 text-black-50'><strong>{beer.attenuation_level}</strong></h4>
          <p className='m-0 text-black-50'>{beer.tagline}</p>
          <p className='m-0'><strong>{beer.first_brewed}</strong></p>
          <p>{beer.description}</p>
          <p className='fs-6 text-black-50'><strong>Created by:{beer.contributed_by}</strong></p>
        </div>
      </div>
    )
    :<h4>'Loading'</h4>}
  <Link to='/beers'>Back</Link>
</>
  )
}

export default SingleBeer