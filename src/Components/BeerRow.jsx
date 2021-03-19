import React from 'react'
import '../Styles/BeerRow.css'

function BeerRow(props) {
    const {beer} = props
    return (
        <div className="BeerRow">
            <img src={beer.image_url} alt={beer.name}/>
            <div className="BeerInfo">
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>Created by: {beer.contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerRow
