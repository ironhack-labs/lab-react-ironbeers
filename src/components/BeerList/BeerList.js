import React from 'react'

function BeerList({beer}){
  return(
    <div>
      <img src={beer.image_url} alt={beer.name}></img>
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>Created by: {beer.contributed_by}</p>
    </div>
  )
}
export default BeerList