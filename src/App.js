import './App.css';
import HomePage from "./components/HomePage";
import BeersList from "./components/BeersList";
import BeerDetail from "./components/BeerDetail";
import CreateBeer from "./components/CreateBeer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/beers/:beerId" element={<BeerDetail />} />
        <Route path="/random-beer" element={<BeerDetail isRandom={true} />} />
        <Route path="/new-beer" element={<CreateBeer />} />
      </Routes>
    </div>
  );
}

export default App;
