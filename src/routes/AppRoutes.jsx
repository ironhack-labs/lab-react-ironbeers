import IndexPage from '../pages/IndexPages'
import Beers from '../components/Beers/Beers'
import BeerDetails from '../components/BeerDetails/BeerDetails'
import RandomBeer from '../components/RandomBeer/RandomBeer'
import NewBeer from '../components/NewBeer/NewBeer'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:id" element={<BeerDetails />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes