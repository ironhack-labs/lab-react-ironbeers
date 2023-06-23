import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element= {<Home /> } />
        <Route  path="/beers" element= {<Beers /> } />
        <Route  path="/random-beers" element= {<RandomBeer /> } />
        <Route  path="/new-beer" element= {<NewBeer /> } />
      </Routes>
      
    </div>
  );
}

export default App;
