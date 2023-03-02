import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ListBeersPage from '../pages/ListBeersPage/ListBeersPage'
import NewBeerPage from '../pages/NewBeerPage/NewBeerPage'
import RandomBeerPage from '../pages/RandomBeerPage/RandomBeerPage'
import SingleBeerPage from '../pages/SingleBeerPage/SingleBeerPage'


const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<ListBeersPage />} />
            <Route path="/beers/:beer_id" element={< SingleBeerPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/new-beer" element={<NewBeerPage />} />
        </Routes>
    )
}

export default AppRoutes