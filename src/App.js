import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";


function App() {

return (
  <div>
    <Routes>
      <Route path="/beers" element={<Beers />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
    </Routes>
  </div>
);
}


export default App;
