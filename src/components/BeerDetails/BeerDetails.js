import Header from "../Header/Header"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function BeerDetails() {

    const [beerDetails, setBeerDetails] = useState({})
    const { beerId } = useParams()

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
            .then(({ data }) => setBeerDetails(data))
    }, [beerId])

    return (
        <>
            <Header/>

            <img src={beerDetails.image_url} alt="beerImg" />
            <br />
            <p>{beerDetails.name}</p>
            <br />
            <p>{beerDetails.tagline}</p>
            <br />
            <p>{beerDetails.first_brewed}</p>
            <br />
            <p>{beerDetails.attenuation_level}</p>
            <br />
            <p>{beerDetails.description}</p>
            <br />
            <p>{beerDetails.contributed_by}</p>

        </>
    )
}

export default BeerDetails
