import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import AllBeers from './AllBeers/AllBeers';
import axios from 'axios';
import SingleBeer from './SingleBeer/SingleBeer';
import NewBeer from './NewBeer/NewBeer';

export const beersApi = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/random-beer" element={<SingleBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </>
  );
}

export default App;
