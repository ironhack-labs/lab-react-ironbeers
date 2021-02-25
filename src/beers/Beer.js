import React from 'react'



const Beer = ({ image, name, tagline, contributed_by}) => {
    return (
        <div>
        <figure>
            <img src={image} />
        </figure>
        <h3>{name}</h3>
        <h4>{tagline}</h4>
        <p>{contributed_by}</p>
            
        </div>
    )
}





export default Beer