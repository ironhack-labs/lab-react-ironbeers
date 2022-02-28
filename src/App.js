
import './App.css';
import {Routes, Route} from "react-router-dom"
import Homepage from "./components/Homepage"
import Navbar from './components/Navbar';
import AllBeers from './components/AllBeers'
import BeerDetails from "./components/BeerDetails"
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/beers' element={<AllBeers />}/>
        <Route path='/beers/:id' element={<BeerDetails />}/>
        <Route path='/random-beer' element={<RandomBeer />}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
