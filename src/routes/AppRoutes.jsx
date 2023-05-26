import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import BeersPage from '../pages/BeersPage/BeersPage'
import RandomPage from '../pages/RandomPage/RandomPage'
import NewBeerPage from '../pages/NewBeerPage/NewBeerPage'
import BeerDetailsPage from '../pages/BeerDetailsPage/BeerDetailsPage'


const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/random-beer" element={<RandomPage />} />
            <Route path="/new-beer" element={<NewBeerPage />} />
            <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        </Routes>
    )
}

export default AppRoutes