import './App.css';
import { Route, Routes } from "react-router-dom";
import BeersList from './components/BeersList';
import NewBeer from './components/NewBeer';
import Homepage from "./components/Homepage";
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/beers" element={<BeersList/>} />
        <Route path="/random-beer" element={<RandomBeer/>} />
        <Route path="/new-beer" element={<NewBeer/>} />
        <Route path="/beers/:beerId" element={<BeerDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
