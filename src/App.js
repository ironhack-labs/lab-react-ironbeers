
import {  Route, Routes } from 'react-router-dom';
import './App.css';

import Homepage from './components/Homepage';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Homepage/>}/>
        <Route path="/beers" element={ <BeersList/>}/>
        <Route path="/beers/:id" element={ <BeerDetails/>}/>
        <Route path="/random-beer" element={ <RandomBeer/>}/> 
        <Route path="/new-beer" element={ <NewBeer/>}/> 
     
      </Routes>
     
    </div>
  );
}

export default App;
