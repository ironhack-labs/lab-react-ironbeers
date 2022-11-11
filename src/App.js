import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/beers/:beerId" element={<SingleBeer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
