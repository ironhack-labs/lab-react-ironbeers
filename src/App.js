import { useState, useEffect } from 'react';
import './App.css';
import BeersList from './components/BeersList/BeersList';
import { getBeers } from './services/beersService';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';

function App() {

  const {pathname} = useLocation();

  const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    getBeers()
      .then(beers => setBeersData(beers));
  });

  return (
    <div className="App container-fluid">
    {pathname !== "/" && pathname !== "/home" && <Header /> }
      <Routes>
      <Route path="/home?" element={<Home />} />
        <Route path="/beers" element={<BeersList beersData={beersData} />} />
      </Routes>
    </div>
  );
}

export default App;
