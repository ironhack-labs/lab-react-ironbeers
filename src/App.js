import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import Beer from './components/Beer';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeer';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeersFromAPI();
  }, []);

  const fetchBeersFromAPI = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => console.log('error getting beers from API', e));
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/beers/:id" element={<Beer beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route
          path="/new-beer"
          element={<AddBeer fetchBeersCB={fetchBeersFromAPI} />}
        />
      </Routes>
    </div>
  );
}
export default App;
