import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home-page/HomePage'
import BeersPage from '../pages/beers-page/BeersPage'
import RandomBeer from '../components/random-beer/RandomBeer'
import BeerDetails from '../pages/beers-details/BeerDetails'


const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/:id" element={<BeerDetails />} />
            <Route path="/random" element={<RandomBeer />} />
            <Route path="/new" element={<HomePage />} />
            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes