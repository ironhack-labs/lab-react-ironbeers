import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AllBeersView from '../pages/AllBeersView'
import NewBeerView from '../pages/NewBeerView'
import RandomBeerView from '../pages/RandomBeerView'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AllBeersView" element={<AllBeersView />} />
            <Route path="/newBeer" element={<NewBeerView />} />
            <Route path="/randomBeer" element={<RandomBeerView />} />
                        
        </Routes>
    )
}

export default AppRoutes