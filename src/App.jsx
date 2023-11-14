import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import AllBeersPage from "./pages/AllBeersPage.jsx"
import RandomBeerPage from "./pages/RandomBeerPage.jsx"
import AddBeerPage from "./pages/AddBeerPage.jsx"
import BeerDetailsPage from "./pages/BeerDetailsPage.jsx"


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<AllBeersPage />}></Route>
        <Route path="/random-beer" element={<RandomBeerPage />}></Route>
        <Route path="/new-beer" element={<AddBeerPage />}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
