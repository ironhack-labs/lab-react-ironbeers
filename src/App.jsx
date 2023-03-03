import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme.context';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import {Route, Routes} from 'react-router-dom';
import BeerDetails from './pages/BeerDetails';
import Homepage from './pages/Homepage';


// IMPORTANT!!!!!!!!!!1 WE NEED A CONTEXT FILE, TO SEND STUFF FROM ONE COMPONENT TO ANOTHER, WITHOUHT DRILLING DOWN ON THE APP.JSX
//CONTEXT FILE ON THE scr FOULDER
function App() {
  return (
    <div className={''}>   

      <Routes>
        <Route 
          path="/"
          element= {<Homepage />}
        />
        <Route 
          path="/beers"
          element= {<Beers />
          }
        />
        <Route 
          path="/NewBeer"
          element= {<NewBeer />}
            
        />
        <Route 
          path="/RandomBeer"
          element= {<RandomBeer />}
        />
        <Route
          path="/beers/:id"
          element= {<BeerDetails />}
        />
        <Route
          path="/beers/randombeer"
          element= {<RandomBeer />}
        />

      </Routes>
    </div>
  );
}

export default App;
