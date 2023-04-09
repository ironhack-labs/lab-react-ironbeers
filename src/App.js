import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/HomePage';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from "./components/BeerDetails";

function App() {
  return (
   <>
   <Routes>
   <Route path='/' element={ <Homepage />} />
   <Route path='/beers' element= {<Beers/>} />
   <Route path='/randomBeer' element= {<RandomBeer/>} />
   <Route path='/newBeer' element= {<NewBeer/>} />
   <Route path="/beers/:id" element={<BeerDetails />} />
   </Routes>
   </>
  );
  }

export default App;