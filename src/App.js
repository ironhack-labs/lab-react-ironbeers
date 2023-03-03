import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import Header from './components/Header';
import ListBeer from './pages/ListBeer';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';


function App() {
  return <div className="App">
  <Header></Header>
  
  
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/beers" element={<ListBeer />} />
  <Route path="/random-beers" element={<RandomBeer />} />
  <Route path="/new-beer" element={<NewBeer/>} />
  <Route path="/beer/:id" element={<BeerDetails/>} />
      </Routes>
    
  </div>;
}
export default App;
