import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ListAllTheBeers from './components/ListAllTheBeers';
import DisplayASingleBeer from './components/DisplayASingleBeer';
import RandomBeer from './components/RandomBeer';
import CreateNewBeer from './components/CreateNewBeer';


function App() {
  const [ beers, setBeers ] = useState([]);
  const getBeers = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeers(response.data);
    } catch (error) {
      window.alert('Houve um erro');
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  console.log(beers);

  const addBeer =(beerAdded) =>{
    const newList = [...beers, beerAdded]
      setBeers(newList);
     }

  return (
    <div className="App">
    
    <Routes>
      <Route
      path ='/'
      element = {<Home/>}
      />
       <Route
      path ='/beers'
      element = {<ListAllTheBeers beers={beers}/>}
      />
       <Route
      path ='/beers/:id'
      element = {<DisplayASingleBeer beers={beers}/>}
      />
       <Route
      path ='/random-beer'
      element = {<RandomBeer/>}
      />
      <Route
      path ='/new-beer'
      element = {<CreateNewBeer onAdd={addBeer}/>}
      />

    </Routes>
   
      
  
    </div>
  );
}

export default App;
