import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import beerService from './../Services/BeerServices'
import HomePage from './../Pages/HomePage/HomePage'
import ListPage from '../Pages/ListPage/ListPage'
import RandomBeer from '../Pages/RandomBeer/RandomBeer'
import BeerDetails from '../Pages/SingleBeer/SingleBeer'

const AppRoutes = () => {

    const [beersList, setBeersList] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beerService
            .getBeers()
            .then(({ data }) => {
                console.log(data)
                setBeersList(data)
            })
            .catch((err) => console.error(err))

    }
    // console.log(beersList)

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<ListPage beersList={beersList} />} />
            <Route path="/new" element={<p>Yay</p>} />
            <Route path="/beers/:beer_id" element={<BeerDetails beersList={beersList} />} />
            <Route path="/random" element={<RandomBeer beersList={beersList} />} />
        </Routes>
    )
}

export default AppRoutes