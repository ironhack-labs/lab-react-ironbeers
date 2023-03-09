import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import Navbar from './components/Navbar';
import Beer from './pages/Beer';
import Search from './pages/Search';
import Homepage from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:id" element={<Beer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/search" element={<Search></Search>}></Route>
      </Routes>
    </>
  );
}

export default App;
