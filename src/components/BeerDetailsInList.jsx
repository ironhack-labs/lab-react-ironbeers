import React from 'react'

const BeerDetailsInList = (props) => {

    const { beer } = props

    return (
            <div className="beer-row">
                <div className="beer-image">
                    <img src={beer.image_url} alt={`pic beer ${beer.name}`}/>
                </div>
                <div className="beer-info">
                    <span className="beer-name">{beer.name}</span>
                    <span className="beer-tagline">{beer.tagline}</span>
                    <span className="beer-createdby">{beer.contributed_by}</span>
                </div>   
            </div>
    )
}

export default BeerDetailsInList
