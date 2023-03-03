import { Route, Routes } from "react-router-dom"
import Beers from "../pages/Beers/Beers"
import HomePage from "../pages/HomePage/HomePage"
import NewBeer from "../pages/NewBeer/NewBeer"
import RandomBeer from "../pages/RandomBeer/RandomBeer"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes