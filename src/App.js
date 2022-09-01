
import './App.css';
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import AllBeers from './pages/AllBeers';

let beersData = [];

function App() {

  const [beers, setBeers] = useState([]);

  useEffect (() => { 
    axios.get( "https://ih-beers-api2.herokuapp.com/beers" ).then((result) => {
    setBeers(result.data);
    });

  }, []);

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/AllBeers" element={< AllBeers beers={beers} />} />

        <Route path="/RandomBeer" element={< RandomBeer />} />

       
        <Route path="/NewBeer" element={< NewBeer />} />
        <Route path="*" element={< ErrorPage />} />

      </Routes>

    </div>
  );
}

export default App;
