import React from 'react'
import Beer from '../Beer/Beer'

function BeerList({ beersData }) {
  return (
    <div className=''>
      {beersData
        .map(beer => (
          <Beer beer={beer} />
        ))}
    </div>
  )
}

export default BeerList