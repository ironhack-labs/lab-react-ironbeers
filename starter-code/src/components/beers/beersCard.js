import React from 'react'


import { Link } from 'react-router-dom'

const beersCard = ({ _id, name, description, image_url }) => {

    return (
        <div>
            <img src={image_url} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <br></br>
            <Link className="btn btn-sm btn-dark" to={`/${_id}`}>details</Link>
        </div >
    )
}


export default beersCard