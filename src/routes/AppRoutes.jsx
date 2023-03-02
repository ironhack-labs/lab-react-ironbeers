import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import BeersPage from "../pages/BeersPage/BeersPage";
import BeerDetailsPage from "../pages/BeerDetailsPage/BeerDetailsPage";
import RandomBeerPage from "../pages/BeerRandomPage/RandomBeerPage";
import CreateBeerPage from "../pages/CreateBeerPage/CreateBeerPage";


const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/beers' element={<BeersPage />}></Route>
            <Route path='/random-beer' element={<RandomBeerPage />}></Route>
            <Route path='/new-beer' element={<CreateBeerPage />}></Route>
            <Route path='/:id' element={<BeerDetailsPage />}></Route>
        </Routes>
    )
}

export default AppRoutes