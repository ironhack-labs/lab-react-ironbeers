import { Routes, Route } from "react-router-dom"
import BeersPage from "../pages/BeersPage/BeersPage"
import DetailsBeerPage from "../pages/DetailsBeerPage/DetailsBeerPage"
import HomePage from "../pages/HomePage/HomePage"
import NewBeerPage from "../pages/NewBeerPage/NewBeerPage"
import RandomBeerPage from "../pages/RandomBeerPage/RandomBeerPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/details/:id" element={<DetailsBeerPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/new-beer" element={<NewBeerPage />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes