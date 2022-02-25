import HomePage from '../pages/HomePage/HomePage'
import ListBeers from '../pages/ListBeersPage/ListBeers'
import RandomBeer from '../pages/RandomBeerPage/RandomBeer'
import SingleBeer from '../pages/SingleBeerPage/SingleBeer'
import NewBeer from '../pages/NewBeerPage/NewBeerPage'

import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {

    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    );
}

export default AppRoutes