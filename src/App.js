import './App.css';
import HomePage from "./Pages/HomePage";
import Beers from "./Pages/Beers";
import RandomBeer from "./Pages/RandomBeer";
import NewBeer from "./Pages/NewBeer";
import BeerDetails from "./Pages/BeerDetails"
import { Routes, Route} from "react-router-dom";





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/BeerDetails/:id" element={<BeerDetails />} />
        <Route path="/randombeer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />

        

      </Routes>  
    </div>
  );
}

export default App;
