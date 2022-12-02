import './App.css';
import React, { useState, useEffect }  from "react";    
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios                    from "axios"; 
import Navbar                   from './components/Navbar';
import HomePage                 from './components/HomePage';
import AllBeersPage             from './components/AllBeersPage'; 
import SingleBeerPage           from './components/SingleBeerPage'; 
import NewBeer                  from './components/NewBeerPage';
import RandomBeerPage           from './components/RandomBeerPage';
const urlApi = "https://ih-beers-api2.herokuapp.com/beers";


function App() {

  const [beers, setBeers]     = useState([]);
  const [showNav, setShowNav] = useState(true);
  
  useEffect(() => {                                
    axios
      .get(urlApi)
      .then((response) => {
        console.log('response data:', response.data);
        setBeers(response.data)
      }); 
  }, []);  

  return (
    <div className="App">
      <BrowserRouter>
        { showNav && <Navbar /> } 
        <Routes>
          <Route
            path="/"
            element={ <HomePage showNav={ showNav } setShowNav={ setShowNav }/> }
          />
          <Route
            path="/beers"
            element={ <AllBeersPage beers={ beers } setBeers={ setBeers } setShowNav={ setShowNav } /> }
          />
          <Route
            path="/beers/:beerId"
            element={ <SingleBeerPage beers={ beers } setBeers={ setBeers } setShowNav={ setShowNav } />}
          />
          <Route
            path="/new-beer"
            element={ <NewBeer setShowNav={ setShowNav } /> }
          />
          <Route
            path="/random-beer"
            element={ <RandomBeerPage setShowNav={ setShowNav } /> }
          />
        </Routes>
      </BrowserRouter>
      
    </div>
  ); 
}

export default App;
