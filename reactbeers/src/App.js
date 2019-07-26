import React from 'react';
import logo from './logo.svg';
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Main from './Components/main/Main'
function App() {
  return (
    <div className="App">
     <Main/>
    </div>
  );
}

export default App;
