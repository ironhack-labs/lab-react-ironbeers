import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import BeersList from './components/BeersList';
import Beer from './components/Beer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<><Header /><BeersList /></>} />
        <Route path="/beers/:beerId" element={<><Header /><Beer random={false}/></>} />
        <Route path="/random-beer" element={<><Header /><Beer random={true}/></>} />
        <Route path="/new-beer" element={<><Header /><NewBeer /></>} />
      </Routes>

    </div>
  );
}

export default App;
