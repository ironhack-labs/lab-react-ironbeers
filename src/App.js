import Home from './components/Home';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {

  const [ rand, setRand ] = useState("");
 
  const getRandom = (random) => {
    //console.log("i'm " + random);
    setRand(random);
  }


  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Home callbackToRandom={getRandom} />} />

        <Route path='/beers' element={<Beers random={rand} />} />
        
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>

    </div >
  );
}

export default App;
