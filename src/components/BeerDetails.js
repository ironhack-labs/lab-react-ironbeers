import React from 'react'
import axios from 'axios'

export default function BeerDetails(props) {

        console.log(props)
        return (
            <div>
                <img src={props.image_url}/>
                <h1>{props.name}</h1>
                <h2>{props.tagline}</h2>
                <p>{props.first_brewed}</p>
                <p>{props.attenuation_level}</p>
                <p>{props.description}</p>
                <p>{props.contributed_by}</p>
            </div>
        )
    }