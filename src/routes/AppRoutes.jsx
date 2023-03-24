import { Route, Routes } from "react-router-dom"

import Homepage from "./../components/Homepage/Homepage"
import Beers from "./../components/Beers/Beers"
import RandomBeer from "./../components/RandomBeer/RandomBeer"
import NewBeer from "./../components/NewBeer/NewBeer"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/allBeers" element={<Beers />} />
            <Route path="/randomBeer" element={<RandomBeer />} />
            <Route path="/newBeer" element={<NewBeer />} />

            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}


export default AppRoutes