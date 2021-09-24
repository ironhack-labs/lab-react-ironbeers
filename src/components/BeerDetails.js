import React from 'react'
import { useState, useEffect } from 'react'


export default function BeerDetails(props) {
    const [beer, setBeer] = useState([])

    const beerId = props.match.params.id

    console.log(beerId)

    return (
        <div>
            <h3>Beer Details</h3>
        </div>
    )
}
