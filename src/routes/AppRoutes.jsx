import { Route, Routes } from "react-router-dom"
import BeerDetailsPage from "../pages/BeerDetailsPage/BeerDetailsPage"
import BeersPage from "../pages/BeersPage/BeersPage"
import HomePage from "../pages/HomePage/HomePage"
import NewBeerPage from "../pages/NewBeerPage/NewBeerPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import RandomBeerPage from "../pages/RandomBeerPage/RandomBeerPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/beers/:id" element={<BeerDetailsPage />} />
            <Route path="/random" element={<RandomBeerPage />} />
            <Route path="/new" element={<NewBeerPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes