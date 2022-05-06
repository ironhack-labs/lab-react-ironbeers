import { Routes, Route } from "react-router-dom";
import BeerDetails from "../pages/BeerDetails";
import BeersListPage from "../pages/BeerListPage";
import HomePage from "../pages/HomePage";
import RandomBeer from "../pages/RandomBeer";







function AppRoutes({ showNavbar, unshowNavbar }) {
    return (
        <Routes>
            <Route path="/" element={<HomePage unshowNavbar={unshowNavbar} />} />
            <Route path="/beers" element={<BeersListPage />} />
            <Route path="/:id" element={<BeerDetails />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<h1>crear cerveee</h1>} />
        </Routes>
    )
}

export default AppRoutes