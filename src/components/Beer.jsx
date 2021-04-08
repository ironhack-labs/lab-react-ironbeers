import React from 'react';
import { Link } from 'react-router-dom';


const Beer = ({image_url, name, tagline ,contributed_by, _id}) => {

    return (
        <> 
        <Link to={`/${_id}`}>

        <img src={image_url} alt=""/>
        <h2>{name}</h2>
        <p>{tagline}</p>
        <p>{contributed_by}</p>
        </Link>
        </>
    )


}

export default Beer;