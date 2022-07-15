import { Routes, Route } from "react-router-dom"

import Home from '../pages/Home/Home'
import ListBeerPage from "../pages/ListBeerPage/ListBeerPage"
import SingleBeer from "../pages/SigleBeerPage/SingleBeerPage"
import RandomBeer from "../pages/RandomBeerPage/RandomBeerPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/beers' element={<ListBeerPage />} />
            <Route path='/beers/:id' element={<SingleBeer />} />
            <Route path='/random-beer' element={<SingleBeer />} />
        </Routes>
    )
}

export default AppRoutes