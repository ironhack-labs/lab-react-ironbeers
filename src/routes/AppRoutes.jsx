import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage/HomePage'
import BeersPage from '../pages/BeersPage/BeersPage'
import BeerDetails from '../pages/BeerDetails/BeerDetails'
import RandomBeer from '../pages/RandomBeer/RandomBeer'
import BeerForm from '../pages/BeerForm/BeerForm'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/beers/:beerId" element={<BeerDetails />} />
            <Route path="/random" element={<RandomBeer />} />
            <Route path="/new" element={<BeerForm />} />
        </Routes>
    )
}

export default AppRoutes