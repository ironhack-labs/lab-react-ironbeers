import { useState, useEffect } from 'react'
import BeersList from '../../components/beers-list/BeersList'
import beersService from '../../services/ironBeerService'
import NavBar from "../../components/navbar/NavBar"

const BeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavBar />

            <BeersList beers={beers} />
        </>
    )
}

export default BeersPage