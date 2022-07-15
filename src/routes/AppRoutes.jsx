import { Routes, Route } from 'react-router-dom'
import AllBeers from '../pages/AllBeers/AllBeers'
import HomePage from '../pages/HomePage/HomePage'
import NewBeer from '../pages/NewBeer/NewBeer'
import RandomBeer from '../pages/RandomBeer/RandomBeer'
import Details from '../pages/Details/Details'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<AllBeers />} />
            <Route path="/beers/:beerId" element={<Details />} />
            <Route path="/random" element={<RandomBeer />} />
            <Route path="/new" element={<NewBeer />} />
        </Routes>
    )
}

export default AppRoutes

   