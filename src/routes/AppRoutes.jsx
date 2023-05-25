import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import BeersListPage from '../pages/BeersListPage/BeersListPage'
import BeersDetailsPage from '../pages/BeersDetailPage/BeersDetailPage'
import RandomBeerPage from '../pages/RandomBeerPage/RandomBeerPage'
import CreateBeerPage from '../pages/CreateBeerPage/CreateBeerPage'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/beers-list' element={<BeersListPage />} />
            <Route path='/details/:_id' element={<BeersDetailsPage />} />
            <Route path='/beers-random' element={<RandomBeerPage />} />
            <Route path='/beers-create' element={<CreateBeerPage />} />
        </Routes>
    )
}

export default AppRoutes