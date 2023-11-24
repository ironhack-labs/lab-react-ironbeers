import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'

const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage() {
    const [beerDetails, setBeerDetails] = useState(null)
    const { beerId } = useParams()

    useEffect(() => {
        axios.get(`${API_URL}/${beerId}`)
            .then(response => {
                setBeerDetails(response.data)
            })
            .catch(error => {
                console.error('Error', error)
            })
    }, [beerId])

    if (!beerDetails) {
        return <div>...</div>
    }

    return (
        <div>
            <h1>{beerDetails.name}</h1>
            <img src={beerDetails.image_url} alt={beerDetails.name} style={{ width: '100px', height: 'auto' }} />
            <p>{beerDetails.tagline}</p>
            <p>First Brewed{beerDetails.first_brewed}</p>
            <p>Contributed by: {beerDetails.contributed_by}</p>
            <p>{beerDetails.description}</p>
            <p>Attenuation level{beerDetails.attenuation_level}</p>
        </div>
    )
}

export default BeerDetailsPage
