
import { Routes, Route } from 'react-router-dom'
import BeerDetails from '../pages/BeerDetails'
import Beers from '../pages/Beers'
import HomePage from '../pages/HomePage'
import NewBeer from '../pages/New-beer'
import RandomBeer from '../pages/RandomBeer'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="/beers/:beer_Id" element={<BeerDetails />} />
            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes