import React from 'react'

function Beer({ beersData }) {
  return (
    <div>
      <img src={beersData[0]?.image_url} alt="beerPicture" />
      <h2>{beersData[0]?.name}</h2>
      <h4>{beersData[0]?.tagline}</h4>
      <h5>{beersData[0]?.contributed_by}</h5>
    </div>
  )
}

export default Beer