import React from 'react'

function Card(props) {
    const {element}=props

  return (
    <div>
           
        <img src = {element.image_url}  alt=''/>
        <h3> name  {element.name}</h3>
        <p>tagline {element.tagline}</p>
        <p>contributed_by{element.contributed_by}</p>
    </div>
  )
}

export default Card