import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import Beers from "../pages/Beers/Beers"
import NewBeer from "../pages/NewBeer/NewBeer"
import RandomBeer from "../pages/RandomBeer/RandomBeer"
import BeerDetails from "../pages/BeersDetails/BeersDetails"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="/beers/:_id" element={<BeerDetails />} />
        </Routes>
    )
}

export default AppRoutes