import React from 'react'

export default function BeerCard(props) {
    return (
        <div className='BeerCard' key={props.key}>
            <div>
                <img src={props.image_url} alt={props.id} />
            </div>
            <section>
                <h1>{props.name}</h1>
                <h2>{props.tagline}</h2>
                <h5><strong>Created by: </strong> {props.contributed_by}</h5>
                <h4>Description: {props.description}</h4>
                <h5>First brewed in {props.first_brewed}</h5>
                <p>Food Pairing: {props.food_pairing}</p>

            </section>
        </div>
    )
}
