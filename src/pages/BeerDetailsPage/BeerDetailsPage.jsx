import './BeerDetailsPage.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navigation from "../../components/Navigation/Navigation"
import beerService from "../../services/beers.services"
import BeerDetails from '../../components/BeerDetails/BeerDetails'

const BeerDetailsPage = () => {

    const { id } = useParams()
    const [beer, setBeer] = useState({})

    useEffect(() => {
        beerService
            .getOneBeer(id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    })

    return (
        <>
            <Navigation />
            <BeerDetails beer={beer} />
        </>
    )
}

export default BeerDetailsPage
