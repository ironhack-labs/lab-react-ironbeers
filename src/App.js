import './App.css';
import { HomePage, NewBeerPage, RandomBeerPage, DetailBeerPage } from './pages';
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
        <Route path='/beer-detail/:beerId' element={<DetailBeerPage />} />
      </Routes>
    </div>
  );
};

export default App;
