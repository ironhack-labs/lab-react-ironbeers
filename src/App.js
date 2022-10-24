
import './App.css';
import axios from "axios";
import HomePage from './components/HomePage';
import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeer';

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
    <Route path='/beers' element={<BeersList beers={beers}/>}/>
    <Route path='/beers/:beerId' element={<BeerDetails beers={beers}/>}/>
    <Route path='/random-beer' element={<RandomBeer />}/>
    <Route path='/new-beer' element={<AddBeer CallBack ={fetchBeersFromAPI}/>}/>
    </Routes>
    </div>
  );
}

export default App;
