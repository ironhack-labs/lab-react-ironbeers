import './App.css';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import Navbar from './components/Navbar';
import BeerDetails from './components/BeerDetails';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (    
  <div className="App">
    <Navbar />

  <Routes>
     <Route path='/' element={ <Homepage />}></Route>
     <Route path='/Beers' element={ <Beers />}></Route>
     <Route path='/:id' element={ <BeerDetails />}></Route>
     <Route path='/random' element={ <RandomBeer />} />
     <Route path='/new' element={ <NewBeer />}></Route>
   </Routes>
 </div>
  );
}

export default App;
