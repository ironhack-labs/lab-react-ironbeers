import React from 'react'
import Beer from '../Beer/Beer'

function BeerList({ beersData }) {
  return (
    <div>
      <Beer beersData={beersData} />
    </div>
  )
}

export default BeerList