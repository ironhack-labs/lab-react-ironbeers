import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import BeerDetail from './components/BeerDetail/BeerDetail';
import BeerList from './components/BeersList/BeerList';
import Header from './components/Navbar/Header';
import NewBeer from './components/NewBeer/NewBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';
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
      {pathname !== "/" && pathname !== "/home" && <Header />}
      <Routes>
        <Route exact path="/home?" element={<Home beersData={beersData} />} />
        <Route path="/beers" element={<BeerList beersData={beersData} />} />
        <Route path="/beers/:id" element={<BeerDetail beersData={beersData}/>} />
        <Route path="/random-beer" element={<RandomBeer beersData={beersData}/>} />
        <Route path="/new-beer" element={<NewBeer/>} />
      </Routes>
    </div>
  );
}

export default App;
