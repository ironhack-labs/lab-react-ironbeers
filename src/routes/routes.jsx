import { Route, Routes } from "react-router-dom"
import Home from "../Home/homePage"
import Beers from "../Components/beers.list"

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/beers" element={<Beers />} />
            {/* <Route path="/random-beer" element={<CoasterDetailsPage />} />
            <Route path="/new-beer" element={<CoasterDetailsPage />} />
            <Route path="*" element={<h1>404</h1>} /> */}

        </Routes>
    )
}

export default AppRoutes