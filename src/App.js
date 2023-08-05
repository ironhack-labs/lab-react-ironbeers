import './App.css';
import axios from 'axios'
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from './pages/HomePage';
import ListBeers from './pages/ListBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';

function App() {

  const [beers, setBeers] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    async function fetchBeers(){
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            setBeers(response.data)
            console.log(response.data)
            setIsLoading(true);
        } catch (error) {
            console.log(error)
        }
    }
    fetchBeers()
}, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/beers' element={ <ListBeers beers={beers} /> }/>
        <Route path='/beers/:beerId' element={ <SingleBeer beers={beers} /> }/>
        <Route path='/random-beer' element={ <RandomBeer /> }/>
        <Route path='/new-beer' element={ <NewBeer /> }/>
      </Routes>
    </div>
  );
}

export default App;
