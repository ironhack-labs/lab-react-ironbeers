import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage"
import AllBeerPage from "./pages/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";

function App() {

  return (
    <>

      <Navbar />

      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeerPage/>} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage/>} />
        <Route path="/beer-detail/:id" element={<BeerDetailsPage/>} />  

      </Routes>

    </>  

  );
}

export default App;
