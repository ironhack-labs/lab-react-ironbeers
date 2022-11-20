import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Beers from './pages/Beers';
import BeerDetail from './pages/BeerDetail';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/beers' element={<Beers />}/>
        <Route path='/beers-detail/:id' element={<BeerDetail />}/>
        <Route path='/new-beer' element={<NewBeer />}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
