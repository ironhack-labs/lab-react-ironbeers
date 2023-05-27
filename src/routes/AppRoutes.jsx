import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AllBeersPage from '../pages/AllBeersPage/AllBeersPage'
import BeerDetailsPage from '../pages/BeerDetailsPage/BeerDetailsPage'
import RandomBeerPage from '../pages/RandomBeerPage/RandomBeerPage'
import CreateBeerPage from '../pages/CreateBeerPage/CreateBeerPage'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<AllBeersPage />} />
            <Route path="/beers/:beer_id" element={<BeerDetailsPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/new-beer" element={<CreateBeerPage />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes