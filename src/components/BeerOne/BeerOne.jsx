import React from 'react'

const BeerOne = ({ name, image_url }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={image_url} alt={name}/>
    </div>
  )
}

export default BeerOne
