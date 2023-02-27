import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './pages/Root';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Routes>
          <Route path="/" element={<Root/>} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/random" element={<RandomBeer />} />
          <Route path="/beers/:id" element={<BeerDetails />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;