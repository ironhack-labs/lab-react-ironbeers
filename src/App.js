import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>

     <AppRouter/>
    </div>
  );
}

export default App;
