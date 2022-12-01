import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import Beers from "../pages/Beers/Beers"
import BeerDetails from "../pages/BeerDetails/BeerDetails"
import RandomBeer from "../pages/RandomBeer/RandomBeer"
import NewBeer from "../pages/NewBeer/NewBeer"
import ErrorPage from "../pages/NotFoundPage/NotFoundPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:beer_id" element={<BeerDetails />} />
            <Route path="/random" element={<RandomBeer />} />
            <Route path="/new" element={<NewBeer />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes