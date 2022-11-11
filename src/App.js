import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import AllBeers from './pages/AllBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Header />}>
          <Route path="/AllBeers" element={<AllBeers />} />
          <Route path="/RandomBeer" element={<RandomBeer />} />
          <Route path="/NewBeer" element={<NewBeer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
