import { Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage/HomePage"
import BeerListPage from "../Pages/BeerListPage/BeerListPage"
import BeerDetailsPage from "../Pages/BeerDetailsPage/BeerDetailsPage"
import RandomBeerPage from "../Pages/RandomBeerPage/RandomBeerPage"
import NewBeerPage from "../Pages/NewBeerPage/NewBeerPage"



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeerListPage />} />
            <Route path="/beers/:beer_id" element={<BeerDetailsPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/new-beer" element={<NewBeerPage />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes