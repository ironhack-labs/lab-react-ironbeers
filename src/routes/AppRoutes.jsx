import { Routes, Route } from "react-router-dom"
import AllBeersPage from "../pages/AllBeersPage"
import BeerDetailsPage from "../pages/BeerDetailsPage"
import HomePage from "../pages/HomePage"



const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<AllBeersPage />} />
            <Route path="/beers/:id" element={<BeerDetailsPage />} />
            {/* <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} /> */}
            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes