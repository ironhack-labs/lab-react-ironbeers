import { Routes, Route } from 'react-router-dom'
import IndexPage from '../pages/HomePage/IndexPage'
import AllBeersPage from '../pages/BeerList/BeerListPage'
import RandomBeerPage from '../pages/RandomBeer/RandomBeer'
import NewBeerPage from '../pages/NewBeer/NewBeer'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<IndexPage />} />
            <Route path="/beers" element={<AllBeersPage />} />
            <Route path="/beers/:id" element={<RandomBeerPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/new-beer" element={<NewBeerPage />} />
            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes