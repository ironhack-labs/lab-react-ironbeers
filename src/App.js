import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Indexpage/HomePage';
import Header from './components/Header/Header';
import NewBeer from './components/Beers/NewBeer';
import RandomBeer from './components/Beers/RandomBeer';
import BeerListPage from './pages/BeerListPage/BeerListPage';



function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerListPage />} />
        <Route path="/random-beer" element={<NewBeer />} />
        <Route path="/new-beer" element={<RandomBeer />} />

      </Routes>


    </div>
  );
}

export default App;
