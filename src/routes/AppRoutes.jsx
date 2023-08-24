import { Routes, Route } from 'react-router-dom'
import HomePage from './../pages/HomePage'
import AllBeersPage from './../pages/AllBeersPage'
import RandomBeerPage from './../pages/RandomBeerPage'
import AddBeerPage from './../pages/AddBeerPage'
import BeerDetailsPage from './../pages/BeerDetailsPage'

const AppRoutes = () => {

    return (

        <Routes>

            <Route path={'/'} element={<HomePage />} />
            <Route path={'/beers'} element={<AllBeersPage />} />
            <Route path={'/random-beer'} element={<RandomBeerPage />} />
            <Route path={'/new-beer'} element={<AddBeerPage />} />
            <Route path={'/beers/:beerId'} element={<BeerDetailsPage />} />

            <Route path={'*'} element={<p>Ops... not found</p>} />

        </Routes>

    )
}

export default AppRoutes