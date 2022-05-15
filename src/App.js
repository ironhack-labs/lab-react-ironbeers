import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import HomePage from './components/HomePage';
import './App.css';
import BeersList from './components/BeersList';
import axios from "axios";
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import CreateBeer from './components/CreateBeer';


function App() {
  
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then( response => {
            setBeers(response.data);
            console.log(response.data)
        })
        .catch( e => console.log("error getting apartments from API", e));
        }, []);



  return (
    <div className="App">
   
     <Routes>
      <Route path='/' element={<HomePage />} />
       <Route path='/beers' element={<BeersList beersList = {beers}/>} /> 
       <Route path='/beers/:beerId' element={<BeerDetails  beersList = {beers}/>}/> 
        <Route path='/random-beer' element={<RandomBeer />} /> 
        <Route path='/new-beer' element={<CreateBeer />} />
    
    </Routes>
      
    </div>
  );
}

export default App;
