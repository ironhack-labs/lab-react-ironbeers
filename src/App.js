import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Beers from "./components/Beers";
import RandomBeer from './components/RandomBeer';
import HomePage from './components/HomePage';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      
        
      <Routes>
      <Route path='/' element={ <HomePage />}></Route>
        <Route path='/beers' element={ <Beers />}></Route>
        <Route path='/random-beer' element={ <RandomBeer />}></Route>
        <Route path='/new-beer' element={ <NewBeer />}></Route>
        <Route path='/beers/:beerId' element={ <BeerDetails />} />

        {/* <Route path='/apartments/create' element={ <CreateApartment />}></Route>
        <Route path='/apartments/:apartmentId' element={ <ApartmentDetails />} /> */}
       
      </Routes>

    </div>
  );
}

export default App;
