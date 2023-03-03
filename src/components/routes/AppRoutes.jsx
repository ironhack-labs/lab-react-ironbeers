import { Routes, Route } from 'react-router-dom'
import HomeBeer from '../HomeBeer/HomeBeer'
import Beers from '../Beers/Beers'
import RandomBeer from '../RandomBeer/RandomBeer'
import NewBeer from '../NewBeer/NewBeer'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeBeer />} />
            <Route path='/allBeers' element={<Beers />} />
            <Route path='/randomBeer' element={<RandomBeer />} />
            <Route path='/newBeer' element={<NewBeer />} />
        </Routes>
    )
}

export default AppRoutes