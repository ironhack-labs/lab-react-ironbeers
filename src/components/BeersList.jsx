import React from 'react'
import Beer from './Beer'

function BeersList({ beers }) {
  return (
    <div>
        {beers.map((beer) => 
            <Beer beer={beer} />
        )}
    </div>
  )
}

export default BeersList;   