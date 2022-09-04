import './App.css';
import { Routes, Route } from 'react-router-dom';
import Beers from './pages/Beers';
import HomePage from './pages/HomePage';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/new-beer' element={<NewBeer />} />
      <Route path='/beers' element={<Beers />} />
      <Route path='/random-beer' element={<RandomBeer />} />
     </Routes>
    </div>
  );
}

export default App;
