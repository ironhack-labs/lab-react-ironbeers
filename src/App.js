import './App.css';
import { Routes, Route } from 'react-router-dom';
import Beers from './pages/Beers';
import HomePage from './pages/HomePage';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Beers' element={<Beers/>}/>; 
        <Route path='/beer/:id' element={<BeerDetails/>}/>;
        <Route path='/RandomBeer' element={<RandomBeer/>}/>; 
        <Route path='/NewBeer' element={<NewBeer/>}/>; 

      </Routes>
    
    </div>
  );
}

export default App;
