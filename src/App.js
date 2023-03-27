import Header from './Components/Header';
import HomePage from './Components/HomePage';
import { Route,Routes } from 'react-router-dom';
import BeersList from './Components/BeersList';
import SingleBeer from './Components/SingleBeer';
import { useState,useEffect } from 'react';
import axios from 'axios';
import RandomBeer from './Components/RandomBeer';

      

function App() {
  const [beers,setBeers] = useState([]);
   useEffect(()=> {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => setBeers(response.data) )
    .catch(err => console.log(err))


   },[])   
  
  
  return (
    <div className="App">
     
     
     <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/beers" element = { 
      <div>         
        <Header/> 
        <BeersList beers = {beers}/>
      </div>} />
      <Route path = "/beers/:beerId" element = {<div> 
      <Header/>
      <SingleBeer beers = {beers}/>
      </div>}/>
      <Route path = "/random-beer" element = {
        <div>
          <Header/>
          <RandomBeer beers = {beers}/>
        </div>
      } />
     </Routes>
     
     

    </div>
  );
}

export default App;
