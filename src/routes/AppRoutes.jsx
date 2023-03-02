import { Route, Routes } from "react-router-dom"
import AllBeersPage from "../pages/AllBeersPage/AllBeersPage"
import BeerDetailsPage from "../pages/BeerDetailsPage/BeerDetailsPage"
import HomePage from "../pages/HomePage/HomePage"
import NewBeerPage from "../pages/NewBeerPage/NewBeerPage"
import RandomBeerPage from "../pages/RandomBeerPage/RandomBeerPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<AllBeersPage />} />
            <Route path="/beers/:beer_id" element={<BeerDetailsPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/new-beer" element={<NewBeerPage />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes