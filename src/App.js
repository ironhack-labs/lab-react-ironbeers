import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<AllBeers />}/>
        <Route path="/random-beer" element={<RandomBeer />}/>
        <Route path="/new-beer" element={<NewBeer />}/>
      </Routes>
    </div>
  );
}

export default App;
