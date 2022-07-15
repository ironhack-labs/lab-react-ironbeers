import IndexPage from '../pages/indexPages'
import Beers from '../components/Beers/Beers'
import BeerDetails from '../components/BeersDetails/BeersDetails'

import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:id" element={<BeerDetails />} />


        </Routes>
    )
}

export default AppRoutes