import { Route, Routes } from "react-router-dom"
import HomePage from "../components/HomePage/HomePage"
import Beers from "../components/Beers/Beers"
import NewBeer from "../components/NewBeer/NewBeer"
import RandomBeer from "../components/RandomBeer/RandomBeer"
import BeerDetails from "../components/BeerDetails/BeerDetails"




const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:id" element={<BeerDetails />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes