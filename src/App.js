import './App.css';
import { HomePage, NewBeerPage, RandomBeerPage } from './pages';
import { Routes, Route } from 'react-router-dom';
import { BeerPage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeerPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<NewBeerPage />} />
      </Routes>
    </div>
  );
};

export default App;
