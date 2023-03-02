import { Route, Routes } from "react-router-dom"
import BeersList from "../components/BeersList/BeersList"
import NavBar from "../components/NavBar/NavBar"
import BeerDetailsPage from "../pages/BeerDetailsPage/BeerDetailsPage"
import BeersPage from "../pages/HomePage/HomePage"
import RandomBeerPage from "../pages/RandomBeerPage/RandomBeerPage"

const AppRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<BeersPage />} />
                <Route path="/beers" element={<BeersList />} />
                <Route path="/beers/random" element={<RandomBeerPage />} />
                <Route path="/beers/create" element={<RandomBeerPage />} />
                <Route path="/beers/:beers_id" element={<BeerDetailsPage />} />
            </Routes>
        </>
    )

}

export default AppRoutes