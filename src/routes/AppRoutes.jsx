import { Routes, Route } from 'react-router-dom'
import RandomBeer from '../pages/RandomBeer/RamdomeBeer'
import NewBeer from '../pages/NewBeer/NewBeer'
import Beer from '../pages/Beers/Beers'
import HomePage from '../pages/HomePage/HomePage'
import BeersDetails from '../pages/BeerDetails/BeerDetails'
const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beer />} />
            <Route path="/details/:beers_id" element={<BeersDetails />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="/random-beer" element={<RandomBeer />} />

        </Routes>
    )
}

export default AppRoutes