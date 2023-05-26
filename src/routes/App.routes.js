import AllBeers from './AllBeers/AllBeers'
import HomePage from './HomePage/HomePage'
import RandomBeer from './RandomBeer/RandomBeer'
import NewBeer from './NewBeer/NewBeer'
import SingleBeer from './HomePage/SingleBeer'

import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/beers" element={<AllBeers></AllBeers>} />
            <Route path="/random-beer" element={<RandomBeer></RandomBeer>} />
            <Route path="/new-beer" element={<NewBeer></NewBeer>} />
            <Route path="/:beerId" element={<SingleBeer />} />
        </Routes>
    )
}

export default AppRoutes;