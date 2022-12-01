import { Routes, Route } from "react-router-dom"
import BeerList from "../pages/BeerList"
import HomePage from "../pages/homePage/homePage"

// import CoasterDetailsPage from "../pages/CoasterDetailsPage/CoasterDetailsPage"
// import CoastersListPage from "../pages/CoastersListPage/CoastersListPage"
// import NewCoasterPage from "../pages/NewCoasterPage/NewCoasterPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lista" element={<BeerList />} />
            <Route path="/detalles/:beer_id" element={<p>h2</p>} />
            <Route path="/crear" element={<p>h3</p>} />
            <Route path="/*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes