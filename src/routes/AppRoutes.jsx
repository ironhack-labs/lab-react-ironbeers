import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AllBeersPage from '../pages/AllBeersPage/AllBeersPage'
import RandomBeerPage from '../pages/RandomBeerPage/RandomBeerPage'
import NewBeerPage from '../pages/NewBeerPage/NewBeerPage'
import BeerDetailsPage from '../pages/BeerDetailsPage/BeerDetailsPage'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<AllBeersPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/new-beer" element={<NewBeerPage />} />
            <Route path="/details/:beers_id" element={<BeerDetailsPage />} />
        </Routes>

    )

}

export default AppRoutes