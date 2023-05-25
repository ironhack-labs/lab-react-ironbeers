import { Routes, Route } from 'react-router-dom'
import HomePage from './../Pages/Homepage/HomePage'
import BeerPage from './../Pages/BeerPage/BeerPage'
import NewBeer from './../Pages/NewBeer/NewBeer'
import RandomBeerPage from './../Pages/RandomBeerPage/RandomBeerPage'
import BeerDetailsPage from './../Pages/BeerDetail/BeerDetail'


const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeerPage />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/:beer_id" element={<BeerDetailsPage />} />



        </Routes>
    )
}

export default AppRoutes