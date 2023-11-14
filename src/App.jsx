import "./App.css";
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<AllBeersPage/>}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage/>}/>
        <Route path="/random-beer"element={<RandomBeerPage/>}/>
        <Route path="/new-beer" element={<AddBeerPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
