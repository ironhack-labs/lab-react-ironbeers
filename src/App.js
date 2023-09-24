import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import BeerDetails from './pages/BeerDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/beers' element={<Beers></Beers>}></Route>
        <Route path='/beers/:id' element={<BeerDetails></BeerDetails>}></Route>
        <Route path='/random-beer' element={<RandomBeer></RandomBeer>}></Route>
        <Route path='/new-beer' element={<NewBeer></NewBeer>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
