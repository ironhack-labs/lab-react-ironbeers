import AllBeersPage from '../pages/HomePage/AllBeersPage'
import HomePage from '../pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import RandomBeersPage from '../pages/HomePage/RandomBeersPage'
import NewBeersPage from '../pages/HomePage/NewBeersPage'
import SingleBeer from '../pages/HomePage/SingleBeer'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/beers" element={<AllBeersPage></AllBeersPage>} />
            <Route path="/random-beer" element={<RandomBeersPage></RandomBeersPage>} />
            <Route path="/new-beer" element={<NewBeersPage></NewBeersPage>} />
            <Route path="/:beerId" element={<SingleBeer />} />
        </Routes>
    )
}

export default AppRoutes