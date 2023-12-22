import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import AddBeerPage from "./pages/AddBeerPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/beers" element={<AllBeersPage />}></Route>
        <Route path="/random-beer" element={<RandomBeerPage />}></Route>
        <Route path="/new-beer" element={<AddBeerPage />}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
