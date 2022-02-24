import './App.css';
import HomePage from './components/Pages/HomePage';
import { Route, Routes } from 'react-router-dom'
import AllBeers from './components/AllBeers/AllBeers';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';


function App() {
  return (

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/beers' element={<AllBeers />} />
      <Route path='/random-beer' element={<RandomBeer />} />
      <Route path='/new-beer' element={<NewBeer />} />

    </Routes>


  );
}

export default App;
