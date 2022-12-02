import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import BeerList from "../pages/BeerList";
import BeerInfo from "../pages/BeerInfo";
import BeerRandom from "../pages/BeerRandom";
import BeerNew from "../pages/BeerNew";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/beers" element={<BeerList />} />
            <Route path="/beers/:id" element={<BeerInfo />} />
            <Route path="/beers/random" element={<BeerRandom />} />
            <Route path="/beers/new" element={<BeerNew />} />
        </Routes>
    )
}

export default AppRoutes