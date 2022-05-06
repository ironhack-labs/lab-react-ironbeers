import HomePage from "../pages/HomePage/HomePage"
import BeerList from "../pages/BeerList/BeerList"
import BeerOne from "../pages/BeerOne/BeerOne"
import BeerRandom from "../pages/BeerRandom/BeerRandom"

import { Routes, Route } from 'react-router-dom'


const AppRoutes = () => {

    return (
        
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/beers' element={<BeerList />} />
            <Route path='/beers/:id' element={<BeerOne />} />
            <Route path='/random-beer' element={<BeerRandom />} />
            <Route path='/new' element={<HomePage />} />
            <Route path="*" element={<h1>Upsss</h1>} />
        </Routes>
    )
}

export default AppRoutes