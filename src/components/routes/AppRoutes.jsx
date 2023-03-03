import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import Beers from "../pages/Beers/Beers"
import beers from "../services/beers.services"
import BeersDetails from "../pages/BeersDetails/BeersDetails"
import RandomBeer from "../pages/RandomBeer/RandomBeer"
// import CoastersPage from "../pages/CoastersPage/CoastersPage"
// import NewCoasterPage from "../pages/NewCoasterPage/NewCoasterPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Beers" element={<Beers />} />
            <Route path="/RandomBeer" element={<RandomBeer />} />
            <Route path="/Beers/:id" element={<BeersDetails beers={beers} />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes