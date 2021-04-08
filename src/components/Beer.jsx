import React from 'react';

const Beer = ({image_url, name, tagline ,contributed_by}) => {

    return (
        <> 
        <img src={image_url} alt=""/>
        <h2>{name}</h2>
        <p>{tagline}</p>
        <p>{contributed_by}</p>
        </>
    )


}

export default Beer;