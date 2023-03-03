import { Routes, Route } from "react-router-dom"
import BeersPage from "../pages/BeersPage/BeersPage"
import HomePage from "../pages/HomePage/HomePage"
import BeerDetailsPage from "./../pages/BeerDetailsPage/BeerDetailsPage"
import RandomBeerPage from "../pages/RandomBeerPage/RandomBeerPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/beers/:beerid" element={<BeerDetailsPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/new-beer" element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes