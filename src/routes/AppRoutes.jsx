import { Routes, Route } from 'react-router-dom'
import Beers from '../pages/Beers/Beers'
import RandomBeer from '../pages/RandomBeer/RandomBeer'
import NewBeer from '../pages/NewBeer/NewBeer'
import IndexPage from '../pages/IndexPage/IndexPage'
import DetailsPage from '../pages/DetailsPage/DetailsPage'


const AppRoutes = () => {

    return (
        
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:beers_id" element={<DetailsPage />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
    )
}

export default AppRoutes