import './App.css';
import Header from './components/Header';
import axios from 'axios'
import { NavLink, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Beers from './Beers';


function App() {

  const homeData=()=>{
    return(
      <>
        {/* <img src={beers} /><br/> */}
        <NavLink to='/beers'>All Beers</NavLink><br/>
        <p>Lorem ipsum dolor sit </p><br/>
        {/* <img src={newBeer} /><br/> */}
        <NavLink to='/random-beer'>Random Beer</NavLink><br/>
        <p>Lorem ipsum dolor sit </p><br/>
        {/* <img src={randomBeer} /><br/> */}
        <NavLink to='/new-beer'>New Beer</NavLink><br/>
        <p>Lorem ipsum dolor sit </p><br/>

      </>
    )
  }

  return (
    <div className="App">
      <Header>
    <Routes>
      <Route path='/' element={homeData()}/>
      <Route  path='/beers'/>
      <Route path='/random-beer'/>
      <Route  path='/new-beer'/>
    </Routes>
    </Header>
    <Beers />
    </div>
  );
}

export default App;
