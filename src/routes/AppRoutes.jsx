import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import BeersList from "./../pages/BeersList"
import BeersDetails from "./../pages/BeersDetails"
import RandomBeer from "./../pages/RandomBeer"


const AppRoutes = ({ setToastMessage, setShowToast }) => {

    return (
        <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/beers" element={<BeersList />} />
            <Route path="/beers/:id" element={<BeersDetails />} />
            <Route path="/random-beer" element={<RandomBeer />} />

           


         
        </Routes>
    )
}



export default AppRoutes