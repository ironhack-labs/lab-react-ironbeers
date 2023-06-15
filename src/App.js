import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AllBeers from './pages/AllBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/beers" element= {<AllBeers />} />
        <Route path="/random-beer" element= {<RandomBeer />} />
        <Route path="/new-beer" element= {<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
