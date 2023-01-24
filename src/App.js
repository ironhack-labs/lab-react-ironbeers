import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import BeersList from './components/BeersList/BeersList';
import { useState } from 'react';
import BeerDetails from './components/BeerDetails/BeerDetails';
import RandomBeer from './components/RandomBeer/RandomBeer';
import CreateBeer from './components/CreateBeer/CreateBeer';

function App() {
  const [beers, setBeers] = useState([])

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/test"} element={<Header/>}/>
        <Route path={"/create-beer"} element={<div><Header/><CreateBeer /></div>}/>
        <Route path={"/beers"} element={<div><Header/><BeersList beers={beers} setBeers={setBeers}/></div>}/>
        <Route path={"/random-beer"} element={<div><Header/><RandomBeer /></div>}/>
        <Route path={"/beers/:beerId"} element={<div><Header/><BeerDetails beers={beers} setBeers={setBeers}/></div>}/>
      </Routes>
    </div>
  );
}

export default App;
