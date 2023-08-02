import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

function BeerDetailsPage() {
    const { beerId } = useParams()
    const [beer, setBeer] = useState(null)

    const getBeer = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            setBeer(response.data)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getBeer()
    }, [])

    if (!beer) {
        return <p>Loading...</p>
    }

    return (
        <div className="beer-details">
            <img className="beer-image" src={beer.image_url} alt={`${beer.name} image`} />
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>
                <b>Created by: </b>
                {beer.contributed_by}
            </p>
            <Link to={`/beers`}>Back to Beers</Link>
        </div>
    )
}

export default BeerDetailsPage
