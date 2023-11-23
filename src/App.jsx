import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx"
import AllBeersPage from "./pages/AllBeersPage.jsx";
import BeerDetailsPage from "./pages/BeerDetailsPage.jsx";
import RandomBeersPage from "./pages/RandomBeerPage.jsx";
import AddBeerPage from "./pages/AddBeerPage.jsx";
import Navbar from "./components/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <h1>LAB | React IronBeers</h1>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<AllBeersPage />}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}></Route>
        <Route path="/random-beer" element={<RandomBeersPage />}></Route>
        <Route path="/new-beer" element={<AddBeerPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
