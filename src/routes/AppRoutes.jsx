import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Beers from '../pages/Beers/Beers'
import NewBeer from '../pages/NewBeer/NewBeer'
import RandomBeer from '../pages/RandomBeer/RandomBeer'



function AppRoutes () {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="/random-beer" element={<RandomBeer />} />
        </Routes>
    )  
}

export default AppRoutes

