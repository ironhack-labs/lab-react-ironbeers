import { Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage/HomePage"
import BeerListPage from "../Pages/BeerListPage/BeerListPage"



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeerListPage />} />
            <Route path="/random-beer" element={<h1>Klk</h1>} />
            <Route path="/new-beer" element={<h1>Klk</h1>} />
        </Routes>
    )
}

export default AppRoutes