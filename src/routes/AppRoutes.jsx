import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import AllBeers from "../pages/AllBeers/AllBeers"
import NewBeer from "../pages/NewBeer/NewBeer"
import RandomBeer from "../pages/RandomBeer/RandomBeer"
import SingleBeer from "../pages/SingleBeer/SingleBeer"

const AppRoutes = () => {


    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AllBeers" element={<AllBeers />} />
            <Route path="/beers/:beer_id" element={<SingleBeer />} />
            <Route path="/NewBeer" element={<NewBeer />} />
            <Route path="/RandomBeer" element={<RandomBeer />} />
        </Routes>
    )
}

export default AppRoutes