import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AllBeersPage from '../pages/AllBeersPage'
import AddBeerPage from '../pages/AddBeerPage'
import RandomBeerPage from '../pages/RandomBeerPage'
import BeerDetailsPage from '../pages/BeerDetailsPage'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />}/>
            <Route path={'/beers'} element={<AllBeersPage />}/>
            <Route path={'/random-beer'} element={<RandomBeerPage />}/>
            <Route path={'/new-beer'} element={<AddBeerPage />}/>
            <Route path={'/:beer_id'} element={<BeerDetailsPage />}/>
            

            <Route path={'*'} element={<p>EL ERROR</p>} />
        </Routes>
    )
}

export default AppRoutes