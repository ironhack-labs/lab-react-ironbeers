import React from 'react';

const BeerCard = ({image_url, _id, name, text}) => {
    return (
        <div>
            <img src={image_url} width="300px" alt=''/>
            <h1><a href={`/beer/${_id}`}>{name}</a></h1>
            <p>{text}</p>
        </div>
    )
}

export default BeerCard;