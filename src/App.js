import './App.css';
import { Routes, Route } from "react-router-dom";

//import Header from './components/Header';
import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';


function App() {
  return (
    <div className="App">
     
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<AllBeers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />}/>
          <Route path="/beers/:beerId" element={<BeerDetails />} />
      </Routes>    
    </div>
  );
}

export default App;
