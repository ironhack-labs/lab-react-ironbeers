import './App.css';
import {Routes, Route} from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import Beer from './pages/Beer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  const [beers, setBeers] = useState([])

    const getFromApi = async() =>{
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            setBeers(response.data);
            
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{getFromApi()}, []);
    console.log(beers)

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/beers" element={<AllBeers beers={beers}/>}/>
      <Route path="/beer/details/:beerId" element={<Beer beers={beers}/>}/>
      <Route path="/random-beer" element={<RandomBeer/>}/>
      <Route path="/new-beer" element={<NewBeer/>}/>
      


      
    </Routes>
      
    </div>
  );
}

export default App;
