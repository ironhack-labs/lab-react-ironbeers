import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/IndexPage/IndexPage'
import BeersPage from '../pages/Beers/Beers'
import BeerDetailsPage from '../pages/BeerDetails/BeerDetails'
import RandomBeerPage from '../pages/RandomBeer/RandomBeer'
import NewBeerPage from '../pages/NewBeer/NewBeer'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/beers/:beer_id" element={<BeerDetailsPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/new-beer" element={<NewBeerPage />} />
            {/* <Route path="/beers" element={<HomePage />} />
            <Route path="/random-beer" element={<HomePage />} />
            <Route path="/new-beer" element={<HomePage />} /> */}
        </Routes>
    )
}

export default AppRoutes
