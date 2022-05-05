
import HomePage from '../components/HomePage'
import { Routes, Route } from 'react-router-dom'
import Beers from '../components/Beers'
import BeerDetails from '../components/BeerDetails'
import RandomBeer from '../components/RandomBeer'
import NewBeer from '../components/NewBeer'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:id" element={<BeerDetails />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
    )
}

export default AppRoutes

