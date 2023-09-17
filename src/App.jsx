import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import AddBeersPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";
import RandomBeersPage from "./pages/RandomBeerPage";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"beers"} element={<AllBeersPage />} />
        <Route path={"/new-beer"} element={<AddBeersPage />} />
        <Route path={"/beers/:beerId"} element={<BeerDetailsPage />} />
        <Route path={"/random-beer"} element={<RandomBeersPage/>}/>
      </Routes>
    </>
  )
}

export default App;
