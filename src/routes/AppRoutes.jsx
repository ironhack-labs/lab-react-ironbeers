import { Routes, Route } from "react-router-dom"
import BeerList from "../components/BeerList/BeerList"
import BeerDetails from "../Pages/BeerDetails/BeerDetails"
import BeerDetailsRandom from "../Pages/BeerDetailsRandom/BeerDetailsRandom"


import Homepage from "../Pages/Home/HomePage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/beers" element={<BeerList />} />
            <Route path="/beers/:beer_id" element={<BeerDetails />} />
            <Route path="/beers/random" element={<BeerDetailsRandom />} />
        </Routes>
    )
}
export default AppRoutes