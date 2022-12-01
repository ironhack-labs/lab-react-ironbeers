import { Routes, Route } from "react-router-dom"
import AllBeersPage from "../pages/AllBeersPage/AllBeersPage"
import BeerDetailsPage from "../pages/BeerDetallesPage/BeerDetallesPage"
import CreateBeerPage from "../pages/CreateBeerPage/CreateBeerPage"
import IndexPage from "../pages/IndexPage/IndexPage"
import RandomBeerPage from "../pages/RandomBeerPage/RandomBeerPage"



const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/all-beers" element={<AllBeersPage />} />
      <Route path="/random-beer" element={<RandomBeerPage />} />
      <Route path="/create-beer" element={<CreateBeerPage />} />
      <Route path="/beer-details/:beer_id" element={<BeerDetailsPage />} />
      <Route path="/*" element={<p>404</p>} />
    </Routes>
  )
}

export default AppRoutes