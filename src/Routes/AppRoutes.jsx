import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Beer from "../pages/Beers/Beers"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/beer" element={<Beer />} ></Route>
        </Routes>
    )
}
export default AppRoutes