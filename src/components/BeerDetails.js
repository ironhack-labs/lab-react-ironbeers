import React from 'react'
import Header from './Header'

function BeerDetails(props) {
    
    console.log({props})

    return (
      <div>
        <Header/> 
        <img src={props.image_url}/>
        <h2>{props.name}</h2>
        <h4>{props.tagLine}</h4>
        <h4>{props.first_brewed}</h4>
        <h4>{props.attenuation_level}</h4>
        <h4>{props.description}</h4>
        <h4>{props.contributed_by}</h4>

        
      </div>
    )
    
  
}



export default BeerDetails