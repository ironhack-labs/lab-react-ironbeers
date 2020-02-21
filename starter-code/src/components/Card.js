import React from 'react'


const Card = (props) => {
    return(
<div className='card'>
<img name={props.image}/>
<h1 name={props.name}></h1>
<p name={props.description}></p>
</div>

    )
}

export default Card