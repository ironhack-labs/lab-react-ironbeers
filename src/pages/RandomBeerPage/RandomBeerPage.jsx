import { useEffect, useState } from "react"
import BeerDetails from "../../components/BeerDetails/BeerDetails"
import beersService from "../../services/beers.services"
import Header from "../../components/Header/Header"

const BeerDetailsPage = () => {

    const [beer, setBeer] = useState()

    useEffect(() => {
        beersService.getRandomBeer()
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