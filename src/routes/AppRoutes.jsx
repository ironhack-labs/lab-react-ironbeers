import { Routes, Route } from "react-router-dom"
import AllBeersPage from "../pages/AllBeersPage/AllBeersPage"
import BeerDetails from "../pages/BeerDetailsPage/BeerDetailsPage"
import HomePage from "../pages/HomePage/HomePage"
import NewBeer from "../pages/NewBeerPage/NewBeerPage"
import RandomBeer from "../pages/RandomBeerPage/RandomBeerPage"



const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/all' element={<AllBeersPage />} />
            <Route path='/:id' element={<BeerDetails/>} />
            <Route path='/random' element={<RandomBeer/> } />
            <Route path='/new-beer' element={<NewBeer/>} />
        </Routes>
    )
}

export default AppRoutes