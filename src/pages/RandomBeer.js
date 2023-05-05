import { useState, useEffect } from "react"
import axios from "axios"

import Header from "../components/Header"

function RandomBeer() {

    const [beer, setBeer] = useState(0)

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => {
                setBeer(response.data)
            })
    }, [])

    return(
        <>
        <Header />

        <div>
                <img src={beer.image_url} alt="" />
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>

        </>
    )
}

export default RandomBeer