import { Route, Routes } from "react-router-dom"
import BeersDetails from "../pages/BeerDetails/BeerDetails"
import BeersPage from "../pages/BeersPage/BeersPage"
import HomePage from './../pages/HomePage/HomePage'
import NewBeerForm from './../pages/NewBeerForm/NewBeerForm'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/details/:id" element={<BeersDetails />} />
            <Route path="/new-beer" element={<NewBeerForm />} />
        </Routes>
    )
}

export default AppRoutes