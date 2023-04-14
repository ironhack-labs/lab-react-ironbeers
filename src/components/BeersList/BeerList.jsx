import React from 'react'
import { Link } from 'react-router-dom'
import Beer from '../Beer/Beer'

function BeerList({ beersData }) {
  return (
    <div>
      {beersData
        .map(beer => (
          <Link to={`/beers/${beer._id}`} className='text-decoration-none text-dark' key={beer._id}>
            <Beer beer={beer} />
          </Link>
        ))}
    </div>
  )
}

export default BeerList