import React from 'react'

const BeerDisplay = (info) => {
  var beer = info.info
  return(
    <div>
    <h3>{beer.name}</h3>
    <h4>{beer.tagline}</h4>
    <h3> Level: {beer.attenuation_level}</h3>
    <img src={beer.image_url} style={{width: '60px'}} alt={'photo of' + beer.name}/>
   <h5>Description</h5>
   <p>{beer.description}</p>
   <h5>Brewer Tips</h5>
   <p>{beer.brewers_tips}</p>
    </div>
  )
}

export default BeerDisplay