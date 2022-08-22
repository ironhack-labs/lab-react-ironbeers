
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Beers from './components/Beers/Beers';
 import BeerDetails from './components/BeerDetails/BeerDetails';
import RandomBeer from './components/RandomBeer/RandomBeer';
import AddBeer from './components/AddBeer/AddBeer'; 
import Navbar from './components/Navbar/Navbar';



function App() {
  
  return (
    <div className="App">

     <Navbar /> 

    <Routes>
      <Route path='/' element={<HomePage />}> </Route>
      <Route path='/beers' element={<Beers />}> </Route>
      <Route path='/beers/:beerId' element={<BeerDetails />}> </Route> 
       <Route path='/random' element={<RandomBeer />}> </Route>
      <Route path='/new-beer' element={<AddBeer />}> </Route>
    </Routes>
      
    </div>
  );
}

export default App;
