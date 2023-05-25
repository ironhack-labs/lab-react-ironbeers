import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import AllBeersPage from "../pages/AllBeersPage/AllBeersPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<AllBeersPage />} />

        </Routes>
    )
}

export default AppRoutes





