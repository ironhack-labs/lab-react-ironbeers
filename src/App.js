import { Routes, Route } from 'react-router-dom';
import './App.css';
import Beers from './components/Beers';
import Homepage from './components/Homepage';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'
import BeerDetails from './components/BeerDetails';


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beers/:beerId' element={<BeerDetails />} />

      </Routes>




    </div>
  );
}

export default App;
