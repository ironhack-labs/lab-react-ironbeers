import { Route, Routes } from "react-router-dom"
import BeerDetailsPage from "../pages/BeerDetails/BeerDetails"
import BeersPage from "../pages/BeersPage/BeersPage"
import HomePage from "../pages/HomePage/HomePage"



const AppRoutes = () => {

    return (


        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/details/:beer_id" element={<BeerDetailsPage />} />
        </Routes>
    )
}

export default AppRoutes