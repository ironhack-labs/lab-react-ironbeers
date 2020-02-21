import React from 'react'

 export default function BeerComponent({beer}) {
     return (
         <div>
             <img src={beer.image_url}/>
             <h3>{beer.name}</h3>
             <h5>{beer.tagline}</h5>
             <p>{beer.attenuation_level}</p>
             <p>{beer.description}</p>
             <p>{beer.first_brewed}</p>
             <p>{beer.contributed_by}</p>
         </div>
     )
 }