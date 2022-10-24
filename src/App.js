import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";

import HomePage from './components/HomePage';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import CreateBeer from './components/CreateBeer';

function App() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    fetchBeersFromAPI();
  }, [])

  const fetchBeersFromAPI = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
      setBeers(response.data);
    })
    .catch(e => console.log("error getting beers from API", e));
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/beers' element={<Beers beers={beers}/>}/>
        <Route path='/beers/:id' element={<BeerDetails beers={beers}/>}/>
        <Route path='/random-beer' element={<RandomBeer />}/>
        <Route path='/new-beer' element={<CreateBeer fetchBeersCB={fetchBeersFromAPI}/>}/>
      </Routes>
    </div>
  );
}

export default App;
