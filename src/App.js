
import './App.css';
import BeerList2 from './components/BeerList2/BeerList2';
import HomePage from './components/HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import PageDetails from './components/PageDetails/PageDetails';
import RandomBeer from './components/RandomBeer/RandomBeer';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerList2 />} />
        <Route path="/beer/:id" element={<PageDetails />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="*" element={<h1>Not found</h1>} />   {/*  <== ADD */}

      </Routes>


    </div>

  );
}

export default App;
//<Route path="/beers/:id" element={<BeerDetails />} />