import React from 'react'
import { Link } from 'react-router-dom'

function Beer({ beer }) {
  return (
    <div className='d-flex mb-3 p-2 border-bottom'>
      <img src={beer.image_url} alt={beer.name} width={'40px'} />
      <div className='mx-3 d-flex flex-column justify-content-center'>
        <Link to={`/beers/${beer._id}`} ><h5>{beer.name}</h5></Link>
        <div>
          <p>{beer.tagline}</p>
          <p>Creeated by: {beer.contributed_by}</p>
        </div>
      </div>
    </div>
  )
}

export default Beer