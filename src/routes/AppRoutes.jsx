import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import BeersPage from '../pages/BeersPage/BeersPage'
import BeersDetails from '../pages/BeersDetails/BeersDetails'
import NewBeerPage from '../pages/NewBeerPage/NewBeerPage'
import RandomBeerPage from '../pages/RandomBeerPage/RandomBeerPage'


const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-beers" element={< BeersPage />} />
            <Route path="/:beer_id" element={< BeersDetails />} />
            <Route path="/new-beer" element={< NewBeerPage/>} />
            <Route path="/random-beer" element={< RandomBeerPage />} />
        </Routes>
    )
}

export default AppRoutes