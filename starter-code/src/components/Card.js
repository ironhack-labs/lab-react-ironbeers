import React from 'react'


const Card = (props) => {
    return(
<div className='card'>
    <img src={props.image} alt={props.name}/>
    <h1>{props.name}</h1>
    <p>{props.tagline}</p>
    <p>{props.description}</p>
    <p>{props.first_brewed}</p>
    <p>{props.attenuation_level}</p>
    <p>{props.contributed_by}</p>
</div>

    )
}

export default Card