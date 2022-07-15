import './App.css';
import Beers from './Beers'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'
import Home from './Home'
import BeerDetails from './BeerDetails';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/beers/random' element={<RandomBeer />} />
        <Route path='/beers/new-beer' element={<NewBeer />} />
        <Route path='beers/:id' element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
