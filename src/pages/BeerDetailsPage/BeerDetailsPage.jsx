import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BeerDetails from "../../components/BeerDetails/BeerDetails"
import beersService from "../../services/beers.services"
import Header from "../../components/Header/Header"

const BeerDetailsPage = () => {

    const { beer_id } = useParams()

    const [beer, setBeer] = useState()

    useEffect(() => {
        beersService.getOneBeer(beer_id)
            .then(beer => setBeer(beer.data))
            .catch(err => console.log(err))
    }, [])


    if (!beer) {
        return (
            <h1> loading... </h1>
        )
    }

    return (
        <>
            <Header />
            <BeerDetails beer={beer} />
        </>
    )
}

export default BeerDetailsPage