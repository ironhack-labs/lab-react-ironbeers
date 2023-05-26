import HomePage from '../../pages/HomePage/HomePage'
import Beers from '../../pages/BeersListPage/BeersListPage'
import RandomBeerPage from '../../pages/RandomBeerPage/RandomBeerPage'
import NewBeerPage from '../../pages/NewBeerPage/NewBeerPage'
import { Route, Routes } from 'react-router-dom'
import BeersDetailsPage from '../../pages/BeersDetailsPage/BeersDetailsPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/beers' element={<Beers />} />
            <Route path='/beers/:id' element={<BeersDetailsPage />} />
            <Route path='/random' element={<RandomBeerPage />} />
            <Route path='/new-beer' element={<NewBeerPage />} />
        </Routes>
    )
}
export default AppRoutes