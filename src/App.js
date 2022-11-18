import './App.css';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer.jsx'
import {Routes, Route} from 'react-router-dom'
import BeerDetails from './components/BeerDetails';


function App() {
  return (
    <div className="App">
 
 <Routes>

 <Route path="/" element={<Homepage />} />
 <Route path="/beers" element={<Beers />} />
 <Route path="/RandomBeer" element={<RandomBeer />} />
 <Route path="/NewBeer" element={<NewBeer />} />
 <Route path="/beers/:id" element={<BeerDetails />} />

 </Routes>

   </div>
  );
}

export default App;
