import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ListBeersPage from "../pages/ListBeersPage/ListBeersPage"
import SingleBeerPage from "../pages/SingleBeerPage/SingleBeerPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<ListBeersPage />} />
            <Route path="/:_id" element={<SingleBeerPage />} />
        </Routes>

    )
}

export default AppRoutes