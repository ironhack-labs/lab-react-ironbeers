import logo from './logo.svg';
import './App.css';
import Home from './assets/pages/Home';
import { Route, Routes } from 'react-router-dom';
import ListBeers from './assets/pages/ListBeers';
import SingleBeer from './assets/pages/SingleBeer';
import NewBeer from './assets/pages/NewBeer';
import RandomBeer from './assets/pages/RandomBeer';

function App() {
  return (
    <div className="App">


    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/beers/:beerId' element={<SingleBeer/>} />
      <Route path='/random-beer' element={<RandomBeer/>} />
      <Route path='/new-beer' element={<NewBeer/>} />      
      <Route path='/beers' element={<ListBeers/>} />      
    </Routes>


     
    </div>
  );
}

export default App;
