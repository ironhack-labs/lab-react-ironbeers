import { Route, Routes } from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage"
import SingleBeerPage from "../../pages/SingleBeerPage/SingleBeerPage"
import RandomBeerPage from "../../pages/RandomBeerPage/RandomBeerPage"
import NewBeerPage from "../../pages/NewBeerPage/NewBeerPage"
import BeerListPage from "../../pages/BeersListPage/BeersListPage"
import beerService from './../../services/beer.services'
import { useEffect, useState } from "react"


const AppRoutes = () => {
    const [renderBeers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beerService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeerListPage renderBeers={renderBeers} />} />
            <Route path="/:id" element={<SingleBeerPage renderBeers={renderBeers} />} />
            <Route path="/random" element={<RandomBeerPage renderBeers={renderBeers} />} />
            <Route path="/new" element={<NewBeerPage loadBeers={loadBeers} />} />
            {/* <Route path="/search" element={<BeerListPage />} /> */}

        </Routes>
    )
}
export default AppRoutes