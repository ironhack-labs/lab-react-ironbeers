import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Beers from '../pages/Beers/Beers'
import NewBeer from '../pages/Newbeer/NewBeer'
import RandomBeer from '../pages/Randombeer/RandomBeer'



const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/beer' element={<Beers />} />
            <Route path='/random-beer' element={<RandomBeer />} />
            <Route path='/new-beer' element={<NewBeer />} />
        </Routes>

    )

}

export default AppRoutes