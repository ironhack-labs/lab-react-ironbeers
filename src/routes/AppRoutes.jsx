import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ListBeersPage from '../pages/ListBeersPage/ListBeersPage'
import NewBeer from './../components/NewBeer/NewBeer'
import BeerDetailPage from '../pages/BeerDetailPage/BeerDetailPage'
import RandomBeer from './../pages/RandomBeerPage/RandomBeer'
const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<ListBeersPage />} />
            <Route path="/create" element={<NewBeer />} />
            <Route path="/detalles/:beer_id" element={<BeerDetailPage />} />
            <Route path="/randombeer" element={<RandomBeer />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes