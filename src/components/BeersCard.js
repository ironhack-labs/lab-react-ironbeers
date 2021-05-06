import React from 'react'

const BeerCard = ({ image, name, contributed_by }) => {

    return (

        <div>
            <img src={image}></img>
            <h2>{name}</h2>
            <p>{contributed_by}</p>
        </div>
    )
}

export default BeerCard
