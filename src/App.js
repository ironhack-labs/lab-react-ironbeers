import React from 'react';
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import ListBeers from './components/ListBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeers';
import SingleBeers from './components/SingleBeers';
import { useEffect, useState } from "react";


function App() {

  const [appArray, setAppArray] = useState();



  const baseURL= "https://ih-beers-api2.herokuapp.com/beers";
  
  useEffect(() => {
    getBeerAPI();
  },[]);
  
  const getBeerAPI = () => {
    axios.get(`${baseURL}`)
    .then(response => {
      setAppArray(response.data)})
      .catch(e => console.log(e));
    };
  

  return (
    <Router>
      <div className='totalframe'>
        <nav className="nav-container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/beers">List</NavLink>
          <NavLink to="/beers/new">New Beer</NavLink>
          <NavLink to="/beers/search">Random Beer</NavLink>
          <NavLink to="/beers/:id">Single Beer</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<ListBeers listBeers={appArray}  />} />
          <Route path="/beers/new" element={<NewBeer />} />
          <Route path="/beers/search?q={query}" element={<RandomBeer />} />
          <Route path="/beers/:id" element={<SingleBeers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

