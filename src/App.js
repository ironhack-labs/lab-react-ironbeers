import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Beers from './components/Beers';

function App() {
  return (
<div className='App'>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<><Header /> <Beers/> </> } />
      <Route path="/random-beer" element={<Header />} />
      <Route path="/new-beer" element={<Header />} />
    </Routes>

    </div>
  );
}

export default App;
