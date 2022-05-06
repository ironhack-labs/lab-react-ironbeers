import { Routes, Route } from 'react-router-dom'
import IndexPage from "../assets/pages/IndexPage/IndexPage";
import Beers from '../assets/pages/Beers/Beers';
import RandomBeer from '../assets/pages/RandomBeer/RandomBeer';
import Newbeer from '../assets/pages/NewBeer/NewBeer';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<Newbeer />} />
            <Route path="*" element={<h1>404 biatch</h1>} />
        </Routes>
    )
}

export default AppRoutes