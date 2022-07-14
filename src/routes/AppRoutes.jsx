import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AllBeers from '../pages/AllBeers'
import OneBeer from '../pages/OneBeer'
import Random from '../pages/RandomBeer'
import NewBeer from '../pages/NewBeer'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/all' element={<AllBeers />} />
            <Route path='/:beer_id' element={<OneBeer />} />
            <Route path='/random' element={<Random />} />
            <Route path='/new' element={<NewBeer />} />
        </Routes>
    )
}

export default AppRoutes