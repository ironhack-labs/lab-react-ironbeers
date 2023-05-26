import './App.css';
import {Routes, Route} from 'react-router-dom'
import AddBeer from "./Pages/AddBeer"
import BeerDetails from "./Pages/BeerDetails"
import Home from "./Pages/Home"
import ListBeers from "./Pages/ListBeers"
import RandomBeers from "./Pages/RandomBeers"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/all-beers' element={<ListBeers/>} />
        <Route path='/beers/:beerId' element={<BeerDetails/>} />
        <Route path='/random-beer' element={<RandomBeers />} />
        <Route path='/add-beer' element={<AddBeer />} />
      </Routes>
    </div>
  );
}

export default App;