import { Route, Routes } from "react-router-dom"
import BeersPage from "../components/pages/Beers/Beers"
import BeerDetail from "../components/pages/BeersDetails/BeersDetails"
import HomePage from "../components/pages/HomePage/HomePage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/beers/:id" element={<BeerDetail />} />
            <Route path="/random-beer" element={<p>REGISTRO</p>} />
            <Route path="/new-beer" element={<p>REGISTRO</p>} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes