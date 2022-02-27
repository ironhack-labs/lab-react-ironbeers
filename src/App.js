import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom"; 
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";

function App() {
  return (
    <div /* className="app" */>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<RandomBeer />} />

        {/* <Route path="*" element={ <ErrorPage /> } /> */}
      </Routes>
    </div>
  );
}

export default App;
