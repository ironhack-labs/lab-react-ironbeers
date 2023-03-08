import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Homepage'
import Beers from './Components/Beers'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<Beers/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
