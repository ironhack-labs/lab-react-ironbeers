import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import RandomBeer from './pages/RandomBeer';
import AddBeer from './pages/NewBeer'
import SingleBeer from './pages/SingleBeer';

function App() {

  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeers />} />
        <Route path='/beers/:beerId' element={<SingleBeer />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<AddBeer />} />
      </Routes>
    </div>
  );
}


export default App;
