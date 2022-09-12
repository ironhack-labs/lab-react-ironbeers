import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Beers from './pages/Beers'
import BeerDetails from './pages/BeerDetails'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/beers" element={<Beers/>}></Route>
        <Route path="/beers/:beerId" element={<BeerDetails/>}></Route>
        <Route path="/random-beer" element={<RandomBeer/>}></Route>
        <Route path="/new-beer" element={<NewBeer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
