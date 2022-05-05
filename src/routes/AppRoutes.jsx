import IndexPage from '../pages/IndexPage/IndexPage'
import ListBeerPage from '../pages/ListBeerPage/ListBeerPage'
import NewBeerPage from '../pages/NewBeer/NewBeerPage'
import { Routes, Route } from 'react-router-dom'
import BeerDetailsPageWOW from '../pages/BeerDetailsPage/BeerDetailsPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/beers" element={<ListBeerPage />} />
            <Route path="/beerD/:id " element={<BeerDetailsPageWOW />} />
            <Route path="/new-beer" element={<NewBeerPage />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes