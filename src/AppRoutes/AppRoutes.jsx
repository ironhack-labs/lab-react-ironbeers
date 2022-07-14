import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/Home'
import Beers from '../Beers/Beers'
import NewBeer from '../NewBeer/NewBeer'
import RandomBeer from '../RandomBeer/RandomBeer'
import DetailedBeer from '../DetailedBeer/DetailedBeer'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/beers' element={<Beers />} />
            <Route path='/random-beer' element={<RandomBeer />} />
            <Route path='/new-beer' element={<NewBeer />} />
            <Route path='/beers/:id' element={<DetailedBeer />} />
        </Routes>
    )
}

export default AppRoutes