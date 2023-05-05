import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beers from './pages/Beers'; 
import SingleBeer from './pages/SingleBeer'; 
import RandomBeer from './pages/RandomBeer'; 
import NewBeer from './pages/NewBeer'; 
import React from "react";
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:beerId" element={<SingleBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;