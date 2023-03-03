import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Beers from "../components/Beers/Beers.jsx";
import RandomBeer from "../components/RandomBeer/RandomBeer.jsx";
import NewBeer from "../components/NewBeer/NewBeer.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
        </Routes>

    )
}

export default AppRoutes