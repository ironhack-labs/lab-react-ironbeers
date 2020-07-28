import React from 'react'

export default function BeerCard(props) {
    return (
        <div className='BeerCard'>
            <div>
                <img src={props.image} alt={props.id} />
            </div>
            <section>
                <h1>{props.name}</h1>
                <h2>{props.tagline}</h2>
                <h5><strong>Created by: </strong> {props.contributed_by}</h5>
            </section>
        </div>
    )
}
