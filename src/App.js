import logo from './logo.svg';
import './App.css';
import { Route, Routes, NavLink, Link } from 'react-router-dom';
import HomePage from "./components/HomePage";
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';


function App() {
  return (
    <div className="App">

   
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/beers' element={<AllBeers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        </Routes>
    </div>
  );
}

export default App;
