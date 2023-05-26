import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Beers from '../pages/Beers/Beers'
import NewBeer from '../pages/NewBeer/NewBeer'
import BeerDetailsPage from '../pages/BeerDetailPage/BeerDetailPage'
import BeerRandomPage from '../pages/BeersRandomPage/BeersRandomPage'


const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/beers' element={<Beers />} />
            <Route path='/new-beer' element={<NewBeer />} />
            <Route path='/beers/:beer_id' element={<BeerDetailsPage />} />
            <Route path='/random-beer' element={<BeerRandomPage />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>

    )
}

export default AppRoutes