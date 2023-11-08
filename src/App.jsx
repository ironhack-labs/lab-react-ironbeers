import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AllBeersPage from "./Pages/AllBeersPage";
import RandomBeerPage from "./Pages/RandomBeerPage";
import AddBeerPage from "./Pages/AddBeerPage";
import BeerDetailsPage from "./Pages/BeerDetailsPage"
import "./App.css";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React IronBeers</h1>
      <Routes>
        <Route path = "/" element= {<HomePage />} />
        <Route path = "/beers" element= {<AllBeersPage />} />
        <Route path = "/random-beer" element= {<RandomBeerPage />} />
        <Route path = "/new-beer" element= {<AddBeerPage />} />
        <Route path = "/beers/:beerId" element= {<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
