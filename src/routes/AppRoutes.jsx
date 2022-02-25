import { Route, Routes } from "react-router-dom";
import AllBeers from "../pages/AllBeersPage/AllBeersPage";
import HomePage from "../pages/HomePage/HomePage";


const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/beers' element={<AllBeers />}></Route>
        </Routes>
    )
}

export default AppRoutes