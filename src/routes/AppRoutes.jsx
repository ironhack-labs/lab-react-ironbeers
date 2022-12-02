import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import BeersPage from "../pages/AllBeersPage/AllBeersPage";




const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listado" element={<BeersPage />} />
        </Routes>
    )
}

export default AppRoutes