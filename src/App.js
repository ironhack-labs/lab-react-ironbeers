import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import {useEffect, useState} from "react";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import Navbar from "./components/Navbar";
import NewBeer from "./pages/NewBeer";
import './App.css';
import { useLocation } from 'react-router-dom';

function App() {
  const [nav, setNav] = useState(false)
  const location = useLocation();
  
  useEffect (() => {
    if(location.pathname !== "/") {
      setNav(true)
    } else {
      setNav(false)
    }
  }, [location.pathname])
  return (
    <div className="App" >

    {nav ? <Navbar />: null}
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<AllBeers />}/>
        <Route path="/random-beer" element={<RandomBeer />}/>
        <Route path="/new-beer" element={<NewBeer />}/>
      </Routes>
    </div>
  );
}

export default App;
