import HomePage from "../pages/HomePage/HomePage";
import { Routes, Route } from 'react-router-dom'
import BeerListPage from "../pages/BeersListPage/BeerListPage";

const AppRoutes = () => {

    return (

        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeerListPage />} />
            <Route path="/random-beer" element={<h1>Hola cerveza random!</h1>} />
            <Route path="/new-beer" element={<h1>Hola nueva cerveza</h1>} />
        </Routes>
    )
}

export default AppRoutes