import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import beerService from "../services/beers.service"

function BeerDetailsPage() {
    const { beer_id } = useParams()

    const [beer, setBeer] = useState({})

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        beerService
            .getBeerDetails(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <img src={ beer.image_url } alt={ beer.name } />
            <p>{ beer.name }</p>
            <p>{ beer.tagline }</p>
            <p>{ beer.first_brewed }</p>
            <p>{ beer.attenuation_level }</p>
            <p>{ beer.description }</p>
            <p>{ beer.contributed_by }</p>
        </div>
    )
}

export default BeerDetailsPage
