import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import NavBar from './components/NavBar/NavBar';

function App() {
  let { pathname } = useLocation()
  let match = pathname !==  "/"
  return (

    <div className="App">
    { 
      match &&  <NavBar/>
    }
      <AppRouter/>
    </div>
  );
}

export default App;
