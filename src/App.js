import logo from './logo.svg';
import './App.css';
import { HomePages } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import {BeersPage} from './pages/BeersPage';
import {RandomBeerPage} from './pages/RandomBeerPage';
import {NewBeerPage} from './pages/NewBeerPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element=<HomePages /> />
        <Route path="/beers" element=<BeersPage /> />
        <Route path="/random-beer" element=<RandomBeerPage /> />
        <Route path="/new-beer" element=<NewBeerPage /> />
      </Routes>
    </div>
  );
}

export default App;
