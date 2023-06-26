import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ListBeers from './components/ListBeers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Header from './components/Header';

function App() {
  return (
    <><Header /><Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<ListBeers />} />
      <Route path="/beers/:id" element={<SingleBeer />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
    </Routes></>
  );
}

export default App;
