import { useState, useEffect } from 'react'
import beersService from '../../Services/beer.services'
import BeerCard from '../../Components/BeerCard/BeerCard'

import Header from "../../Components/Header/Header"

const AllBeersPage = () => {




    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }


    return (
        <>
            <Header />

            {
                beers.map(elm => {

                    return <BeerCard {...elm} />

                })
            }


        </>
    )
}

export default AllBeersPage