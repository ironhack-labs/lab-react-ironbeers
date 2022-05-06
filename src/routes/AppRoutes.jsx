import IndexPage from '../pages/IndexPage/IndexPage'
import ListBeerPage from '../pages/ListBeerPage/ListBeerPage'
import NewBeerPage from '../pages/NewBeer/NewBeerPage'
import BeerSelected from '../pages/BeerDetailsPage/beerSelected'
import BeerRandom from '../pages/RandomBeer/RandomBeer'
import { Routes, Route } from 'react-router-dom'
const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/beers" element={<ListBeerPage />} />
            <Route path="/:id" element={<BeerRandom />} />
            <Route path="/new-beer" element={<NewBeerPage />} />
            <Route path="/:id" element={<BeerSelected />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes