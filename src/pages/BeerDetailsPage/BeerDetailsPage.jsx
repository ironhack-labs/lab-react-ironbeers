import { useState, useEffect } from "react"

import { useParams, Link } from "react-router-dom"
import CardBeerDetails from "../../components/CardBeerDetails/CardBeerDetails"
import beersService from "../../services/beers.service"





const BeerDetailsPage = () => {

    const { beer_id } = useParams()

    const [beer, setBeers] = useState()

    useEffect(() => {
        loadBeers()
    }, [])



    const loadBeers = () => {
        beersService
            .getOneBeer(beer_id)
            .then((beer) => setBeers(beer.data))
            .catch(err => console.log(err))
    }


    if (!beer) {
        return <h1>Loading...</h1>
    }



    return (

        <CardBeerDetails beer={beer} />
    )
}

export default BeerDetailsPage