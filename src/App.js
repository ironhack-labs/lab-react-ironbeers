import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BeerList from './components/BeersList/BeerList';
import Home from './pages/Home';
import { getBeers } from './services/BeersService';

function App() {

  const [beersData, setBeersData] = useState([])

  useEffect(() => {
    getBeers()
      .then(beers => {
        setBeersData(beers)
      })
  }, [])


  return (
    <div className="App d-flex justify-content-center">
      <Routes>
        <Route path="/" element={<Home beersData={beersData} />} />
        <Route path="/beers" element={<BeerList beersData={beersData} />} />
      </Routes>
    </div>
  );
}

export default App;
