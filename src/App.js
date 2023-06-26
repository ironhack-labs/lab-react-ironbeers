
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Beers from "./components/Beers" ;
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerDetails from "./components/BeerDetails";
function App() {
  return (
<div className="App">
      
  
    <div className="App">
  
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/beers/:beerId' element={<BeerDetails />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
    </div>
  )
}

export default App;
