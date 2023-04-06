import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {

  
  return (
   <>
   <Routes>
   <Route path='/' element={ <Homepage />} />
   <Route path='/beers' element= {<Beers/>} />
   <Route path='/randomBeer' element= {<RandomBeer/>} />
   <Route path='/newBeer' element= {<NewBeer/>} />
   </Routes>
   </>
  );
}

export default App;
