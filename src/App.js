import { useState, useEffect } from 'react';
import './App.css';
import BeersList from './components/BeersList/BeersList';
import { getBeers } from './services/beersService';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    getBeers()
      .then(beers => setBeersData(beers));
  });

  return (
    <div className="App">
      <Routes>
      <Route path="/home?" element={<Home />} />
        <Route path="/beers" element={<BeersList beersData={beersData} />}/>
      </Routes>
    </div>
  );
}

export default App;
