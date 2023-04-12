import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import BeerList from './components/BeersList/BeerList';
import Header from './pages/Header';
import Home from './pages/Home';
import { getBeers } from './services/BeersService';

function App() {
  const { pathname } = useLocation()

  const [beersData, setBeersData] = useState([])

  useEffect(() => {
    getBeers()
      .then(beers => {
        setBeersData(beers)
      })
  }, [])


  return (
    <div className="App container-fluid">
    { pathname !== "/" && pathname !== "/home" && <Header />}
        <Routes>
          <Route exact path="/home?" element={<Home beersData={beersData} />} />
          <Route path="/beers" element={<BeerList beersData={beersData} />} />
        </Routes>
    </div>
  );
}

export default App;
