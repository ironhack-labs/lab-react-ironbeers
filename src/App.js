import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import NavHomeBar from './views/NavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> Iron Beers </h1>
        <NavHomeBar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
