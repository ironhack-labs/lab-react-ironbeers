import HomePage from "../pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Beers from "../components/Beers/Beers";
import RandomBeer from "../components/Random Beer/RandomBeer";
import NewBeer from "../components/New Beer/NewBeer";
import BeerDetails from "../components/BeerDetails/BeerDetails";
import NewBeerForm from "../components/NewBeerForm/NewBeerForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/random-beer" element={<RandomBeer />} />

      <Route path="/new-beer" element={<NewBeerForm />} />
      <Route path="/beers/:beerId" element={<BeerDetails />} />
      <Route path="/random" element={<RandomBeer />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRoutes;


