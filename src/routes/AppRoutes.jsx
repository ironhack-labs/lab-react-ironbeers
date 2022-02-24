import { Route, Routes } from "react-router-dom"
import IndexPage from "./../pages/Index/IndexPage"
import BeersPage from "./../pages/Beers/BeersPage"
import BeerDetailsPage from "./../pages/Beers/BeerDetailsPage"
import RandomBeerPage from "./../pages/RandomBeer/RandomBeerPage"
import NewBeerPage from "./../pages/NewBeer/NewBeerPage"

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<IndexPage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/beers/:id" element={<BeerDetailsPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/new-beer" element={<NewBeerPage />} />
            <Route path="*" element={<h1>Page not found!</h1>} />


        </Routes>
    )
}
export default AppRoutes