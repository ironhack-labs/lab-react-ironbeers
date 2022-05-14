
import './App.css';

import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';  
 import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
 import NewBeer from './components/NewBeer';
 import RandomBeer from './components/RandomBeer';


import { useState, useEffect } from "react";    
import axios from "axios"; 

function App() {

  const [beers, setBeers] = useState([]);


  useEffect(() => {
  axios
  .get(process.env.REACT_APP_API_URL + "/beers")
    .then(response => {
      setBeers(response.data);
    })
    .catch(e => console.log("error getting beers from API", e))
  })




  return (
    <div className="App">

  <Routes>

<Route path='/' element={<Homepage />} />
<Route path='/beers' element={<Beers beersArr= {beers}/>} />  

<Route path="/beers/:beerId" element={<BeerDetails beersArr= {beers}/>} />
<Route path="/random-beer" element={<RandomBeer beersArr= {beers}/>} /> 

 <Route path="/new-beer" element={<NewBeer/>} /> 
   
       </Routes>  


    </div>
  );
}

export default App;
