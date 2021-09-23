import React from 'react'

export default function CardBeer(props) {
    return (
        <div className="list-group-item card">
            <>
                <img src={props.beer.image_url} alt="Gran cerveza" />
            </>
            <>
                <h2>{props.beer.name}</h2>
                <p>{props.beer.tagline}</p>
                <p>{props.beer.contributed_by}</p>
            </>
        </div >
    )
}
