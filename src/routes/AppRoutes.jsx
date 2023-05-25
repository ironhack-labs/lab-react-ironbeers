import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import NewBeer from '../pages/NewBeer/NewBeer'
import Beers from '../pages/Beers/Beers'
import RandomBeer from '../pages/RandomBeer/RandomBeer'
import BeersDetailsPage from '../pages/BeersDetailsPage/BeersDetailsPage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:beer_id" element={<BeersDetailsPage />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
    )
}

export default AppRoutes