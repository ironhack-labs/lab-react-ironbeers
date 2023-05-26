import { Routes, Route } from "react-router-dom"
import Home from '../Home/Home'
import Beers from "../Beers/Beers"
import SingleBeer from "../SingleBeer/SingleBeer"
import RandomBeer from "../RandomBeer/RandomBeer"
import NewBeer from "../NewBeer/NewBeer"
import ErrorPage from "../NotFoundPage/NotFoundPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:beerId" element={<SingleBeer />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes
