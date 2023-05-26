import { Routes, Route } from 'react-router-dom'
import BeerListPage from '../pages/BeerListPage/BeerListPage'
import BeerDetailsPage from '../pages/BeerDetailsPage/BeerDetailsPage'
import HomePage from "../pages/HomePage/HomePage"
import BeerRandomPage from '../pages/BeerRandomPage/BeerRandomPage'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeerListPage />} />
            <Route path="/beers/:beer_id" element={<BeerDetailsPage />} />
            <Route path="/random" element={<BeerRandomPage />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes