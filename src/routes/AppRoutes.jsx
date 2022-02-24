import HomePage from "../pages/HomePage/HomePage"
import Beers from "../pages/Beers/Beers"
import BeerDetails from "../pages/BeerDetails/BeerDetails"
import RandomBeer from "../pages/RandomBeer/RandomBeer"
import NewBeer from "../pages/NewBeer/NewBeer"

import { Routes, Route } from "react-router-dom"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:beer_id" element={<BeerDetails />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
    )
}

export default AppRoutes