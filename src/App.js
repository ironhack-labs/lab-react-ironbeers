import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RandomBeer } from './pages/RandomBeer';
import { NewBeer } from './pages/NewBeer';
import { AllBeers } from './pages/AllBeers';
import { Header } from './components/Header';
import { BeerDetails } from './pages/BeerDetails';

function App() {
  return (
    <div className="App container">
      {/* <NavBar /> */}
      <Header className="row" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/:id" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
