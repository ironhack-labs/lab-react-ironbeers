import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import AllBeersPage from "../pages/AllBeersPage/AllBeersPage"
import BeerDetailsPage from "../pages/BeerDetailsPage/BeerDetailsPage"
import RandomBeerPage from "../pages/RandomBeerPage/RandomBeerPage"
import NewBeerPage from "../pages/NewBeerPage/NewBeerPage"

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/beers' element={<AllBeersPage />}></Route>
            <Route path='/beers/:beer_id' element={<BeerDetailsPage />} />
            <Route path='/random-beer' element={<RandomBeerPage />} />
            <Route path='/new-beer' element={<NewBeerPage />} />

        </Routes>
    )
}

export default AppRoutes