import { Routes,Route } from "react-router-dom";

import HomePage from "../pages/IndexPage";
import BeersPage from "../pages/beersPage";
import SingleBeerPage from "../pages/singleBeerPage";
import RandomBeerPage from "../pages/randomBeer";



const AppRoutes = () =>{
    return(
        <Routes>
            <Route path='/'element={<HomePage/>}/>
            <Route path='/beers' element={<BeersPage />} />
            <Route path='beers/:Id' element={<SingleBeerPage/>}/>
            <Route path='/random-beer' element={<RandomBeerPage />} />
        </Routes>
    )
}

export default AppRoutes