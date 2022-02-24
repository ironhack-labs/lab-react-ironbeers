import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import beersService from "../../services/beers.service"

const BeerDetailsPage = beer => {

    const [beerDetails, setBeerDetails] = useState({})
    const { beer_id } = useParams()

    useEffect(() => {
        beersService
            .getOneBeer(beer_id)
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
            <img src={beerDetails.image_url} alt="beer"></img>
            <h1>{beerDetails.name}</h1>
            <h2>{beerDetails.tagline}</h2>
            <p>{beerDetails.first_brewed}</p>
            <p>{beerDetails.attenuation_level}</p>
            <p>{beerDetails.description}</p>
            <p>{beerDetails.contributed_by}</p>

        </div>
    )
}

export default BeerDetailsPage