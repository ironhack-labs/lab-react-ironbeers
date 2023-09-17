import "./App.css";
import { useEffect, useState } from 'react';
import axios from "axios";
//import BeerDetails from './components/BeerDetails';
import AllBeers from './pages/AllBeersPage';
import NewBeer from './pages/AddBeerPage';
import RandomBeer from './pages/RandomBeerPage';
import Navbar from './components/Navbar';

import { Link, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";


function App() {

const [beers,setBeers]= useState ([]);

useEffect(() => {
  getBeersFromApi();
}, []);



const getBeersFromApi = () => {
  //axios.get(`${import.meta.env.VITE_API_URL}`)
  axios.get ('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      setBeers(response.data);
      console.log("I AM HERE **** 3"+ beers.length);
    })
    .catch((e) => {
      console.log("error getting beers from the API....", e);
    });
}

const renderList = () => {
  if (beers.length === 0) {
    return <p>loading beers....</p>
  }
}


return (
  <div className="App">
  <h1>LAB | React IronBeers</h1>
  <Navbar /> {/* Render the Navbar component on every page */}
  <AllBeersPage />
  <ul>
    {beers.map((beer) => (
      <li key={beer._id}>
        <img src={beer.image_url} alt={beer.name} style={{ maxWidth: '50px' }} />
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>First Brewed: {beer.first_brewed}</p>
      </li>
    ))}
  </ul>
 
  </div>
);

}
export default App;
