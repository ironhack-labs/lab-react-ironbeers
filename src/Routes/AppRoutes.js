import { Route, Routes } from "react-router-dom"
import BeerDetails from "../Pages/BeerDetails"
import Beers from "../Pages/Beers"
import HomePage from "../Pages/HomePage"
import NewBeer from "../Pages/NewBeer"
import RandomBeer from "../Pages/RandomBeers"

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/beers" element={<Beers/>}/>
            <Route path="/random-beer" element={<RandomBeer/>}/>
            <Route path="/new-beer" element={<NewBeer/>}/>
            <Route path="/beers/:beerId" element={<BeerDetails/>}/>
            <Route path="*" element={<h1>404</h1>}/>
        </Routes>
    )
}

export default AppRoutes