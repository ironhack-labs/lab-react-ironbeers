import './App.css';
import Beers from './Beers'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'
import Home from './Home'
import BeerDetails from './BeerDetails';
import SearchBeer from './SearchBeer';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/beers/random' element={<RandomBeer />} />
        <Route path='/beers/new' element={<NewBeer />} />
        <Route path='/beers/:id' element={<BeerDetails />} />
        <Route path='/beers/search' element={<SearchBeer />} />
      </Routes>
      
    </div>
  );
}

export default App;
