import { Routes, Route } from "react-router-dom"
import IndexPage from "../pages/IndexPage/IndexPage"
import ListBeers from "../pages/ListBeers/ListBeers"
import BeerDetails from "../pages/BeerDetails/BeerDetails"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/beers" element={<ListBeers />} />
            <Route path="/random-beer" element={<h1>Random Beer</h1>} />
            <Route path="/details/:beer_id" element={<BeerDetails />} />
            <Route path="/new-beer" element={<h1>New Beer</h1>} />
            <Route path="/*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes