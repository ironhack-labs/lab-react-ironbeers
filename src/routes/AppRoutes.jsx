import HomePage from '../pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import BeersPage from '../pages/BeersPage'
import BeerDetails from '../components/SingleBeer/BeerDetails'
import RandomBeer from '../pages/RandomBeer'
import NewBeerForm from '../components/NewBeerForm/NewBeerForm'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/:id" element={<BeerDetails />} />
            <Route path="/random" element={<RandomBeer />} />
            <Route path="/new" element={<NewBeerForm />} />



        </Routes>
    )
}

export default AppRoutes