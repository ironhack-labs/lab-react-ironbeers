import { Routes, Route } from "react-router-dom";
import Beers from "../Pages/Beers";
import BeerDetails from "../Pages/Beers-details";
import Home from "../Pages/Home";
import NewBeers from "../Pages/Newbeer";
import RandomBeer from "../Pages/Randombeer";




const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/new-beer" element={<NewBeers />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/beers/:id" element={<BeerDetails />} />
        </Routes>
    );
};

export default AppRoutes;
