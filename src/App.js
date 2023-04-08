import "./App.css";

import HomePage from "./components/HomePage";
import ListBeers from "./components/ListBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/beers" element={<ListBeers/>}/>
      <Route path="/random-beer" element={<RandomBeer/>}/>
      <Route path="/new-beer" element={<NewBeer/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
