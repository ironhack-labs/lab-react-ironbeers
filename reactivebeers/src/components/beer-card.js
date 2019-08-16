import React from 'react'

const Card = ({image_url, name, tagline, contributed_by}) => {
    return (
        <div className ="row align-items-center">
            <div className = "col-3">
                <img className="img-beers" src = {image_url} alt = {name} />
            </div>
            <div className = "col-8">
                <h3>{name}</h3>
                <p>{tagline}</p>
                <small>{contributed_by}</small>
            </div>
        </div>
    )
}

export default Card