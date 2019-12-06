import React from 'react'


import { Link } from 'react-router-dom'

const BeersCard = ({ name, description, image_url , _id }) => {

    return (
        <div className="beers-card" md={4}>
            <img src={image_url}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <Link to={`/${_id}`}>ver detalles</Link>
        </div>
    )
}


export default BeersCard