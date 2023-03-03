import { Route, Routes } from "react-router-dom"
import AllBeers from "../pages/AllBeers/AllBeers"
import BeersDetails from "../pages/BeersDetails/BeersDetails"
import HomePage from "../pages/HomePage/HomePage"
import RandomBeer from "../pages/RandomBeer/RandomBeer"


const BeersRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/beers' element={<AllBeers />} />
            <Route path='/beers/:id' element={<BeersDetails />} />
            <Route path='/random-beer' element={<RandomBeer />} />

        </Routes>
    )
}

export default BeersRoutes