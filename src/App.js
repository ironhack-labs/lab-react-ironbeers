import React  from 'react';
import { Routes, Route, Navigate } from "react-router";

import './App.css';
import Navbar from './components/Navbar/Navbar'
import Allbeers from './views/AllBeers/AllBeers';
import Home from './views/Home/Home'
import RandomBeer from './views/RandomBeer/RandomBeer';

function App() {


  return (
      <div className="App">
            <Navbar />
            <Routes>
              <Route path="/"         element={<Home/>} />
              <Route path="/allBeers" element={<Allbeers/>} />
              <Route path="/random"   element={<RandomBeer/>} />
              {/*  <Route path="/contacts/:id" element={<ContactDetail/>} />
              <Route path="*" element={<Navigate to="/" replace/>} /> */}
            </Routes>
      
      </div>
  );
  
}

export default App;
