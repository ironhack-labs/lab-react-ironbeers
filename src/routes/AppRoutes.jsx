import { Routes, Route } from 'react-router-dom'
import Home from '../assets/componets/homePage/home'
import Beers from '../assets/componets/beers/Beers'
import BearsDetails from '../assets/componets/beers/Beers.details'
import Random from '../assets/componets/randomBeers/Random'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/details/:id" element={<BearsDetails />} />
            <Route path="/random" element={<Random />} />

            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes