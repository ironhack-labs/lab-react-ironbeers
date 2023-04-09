import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Homepage /> } />
        <Route path='/beers' element={
          <>
            <Header />
            <Beers />
          </>
          }
        />
        <Route path='/random-beer' element={
          <>
            <Header />
            <RandomBeer />
          </>
          }
        />
        <Route path='/new-beer' element={
          <>
            <Header />
            <NewBeer />
          </>
          } 
        />
        <Route path='/beers/:beerId' element={
          <>
            <Header />
            <BeerDetails />
          </>
        } />
      </Routes>

      
    </div>
  );
}

export default App;
