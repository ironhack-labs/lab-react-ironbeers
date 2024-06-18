import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>LAB | React IronBeers</h1>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/beers" element={<AllBeersPage/>}></Route>
      <Route path="/random-beer" element={<RandomBeerPage/>}></Route>
      <Route path="/new-beer" element={<AddBeerPage/>}></Route>
      <Route path="/beers/:beerId" element={<BeerDetailsPage/>}></Route>
      
    </Routes>
    </div>
  );
}

export default App;
