import { Routes, Route } from 'react-router-dom'

import HomePage from "../pages/HomePage"
import ListBeersPage from '../pages/ListBeersPage'
import NewBeerPage from '../pages/NewBeerPage'
import RandomBeerPage from '../pages/RandomBeerPage'
import DetailsBeerPage from '../pages/DetailsBeerPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listbeers" element={<ListBeersPage />} />
            <Route path="/newbeer" element={<NewBeerPage />} />
            <Route path="/randombeer" element={<RandomBeerPage />} />
            <Route path="/details/:ID" element={<DetailsBeerPage />} />

        </Routes>
    )
}

export default AppRoutes