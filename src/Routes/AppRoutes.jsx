
import { Routes, Route } from 'react-router-dom'
import Homepage from '../Pages/Homepage/Homepage'
import AllBeersPage from '../Pages/AllBeers/AllBeersPage'
import RandomBeerPage from '../Pages/RandomBeer/RandomBeerPage'
import NewBeerPage from '../Pages/NewBeer/NewBeerPage'


const AppRoutes = () => {

    return (
        <>

            <Routes>

                <Route path="/" element={<Homepage />} />
                <Route path="/beers" element={<AllBeersPage />} />
                <Route path="/beers/:id" element={<RandomBeerPage />} />
                <Route path="/random-beer" element={<RandomBeerPage />} />
                <Route path="/new-beer" element={<NewBeerPage />} />
                <Route path="*" element={<h1>404</h1>} />

            </Routes>
        </>

    )
}

export default AppRoutes