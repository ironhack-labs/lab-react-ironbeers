import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import Navbar from './components/Navbar';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/beers' element={ <Beers /> } />
        <Route path='/beers/:id' element={ <SingleBeer /> } />
        <Route path='/random-beer' element={ <RandomBeer /> } />
        <Route path='/new-beer' element={ <NewBeer /> } />
      </Routes>
    </div>
  );
}

export default App;
