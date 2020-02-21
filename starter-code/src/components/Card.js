import React from 'react'


const Card = (props) => {
    return(
<div className='card'>
<img src={props.image} alt={props.title}/>
<h1>{props.name}</h1>
<p>{props.description}</p>
</div>

    )
}

export default Card