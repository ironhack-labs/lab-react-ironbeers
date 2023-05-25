import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePages/HomePages'
import BeerPages from '../pages/BeerPages/BeerPages'
import BeerDetails from '../pages/BeerDetailsPage/BeerDetails'
import RandomPages from '../pages/RandomPages/RandomPages'
import NewBeers from '../pages/NewBeers/NewBeers'


const AppRoutes = () => {

    return (

        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/beer" element={<BeerPages />} />
            <Route path="/beer/:beer_id" element={<BeerDetails />} />
            <Route path="/random-beer" element={<RandomPages />} />
            <Route path="/new-beer" element={<NewBeers />} />

        </Routes>

    )
}

export default AppRoutes