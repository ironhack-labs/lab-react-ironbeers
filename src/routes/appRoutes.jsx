import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/homePage'
import ListBeerPage from '../pages/ListBeerPage/listBeerPage'
import NewBeerPage from '../pages/NewBeerPage/newBeerPage'
import RandomBeerPage from '../pages/RandomBeerPage/randomBeerPage'
import SingleBeerPage from '../pages/SingleBeerPage/singleBeerPage'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<ListBeerPage />} />
            <Route path="/:id" element={<SingleBeerPage/>} />
            <Route path="/new-beer" element={<NewBeerPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes