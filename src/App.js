import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Beer from './pages/Beer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/beers' element={ <Beers /> } />
        <Route path='/beers/:beerId' element={ <Beer /> } />
        <Route path='/random-beer' element={ <RandomBeer /> } />
        <Route path='/new-beer' element={ <NewBeer /> } />
        <Route path='/*' element={ <Navigate to='/' /> } />
      </Routes>
    </>
  );
}

export default App;