import './App.css';

import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import BeersPage from './pages/BeersPage';


import NavComponent from "./components/NavComponent"
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';


function App() {
  return (
    <div className="App">
      {
        useLocation().pathname != "/" && <NavComponent/>
        
      }
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage/>} />
        <Route path="/beers/:id" element={<BeerDetailsPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
