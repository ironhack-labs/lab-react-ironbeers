import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import BeersList from './components/BeersList';
import Beer from './components/Beer';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<><Header /><BeersList /></>} />
        <Route path="/beers/:beerId" element={<><Header /><Beer /></>} />
        <Route path="/random-beer" />
        <Route path="/new-beer" />
      </Routes>

    </div>
  );
}

export default App;
