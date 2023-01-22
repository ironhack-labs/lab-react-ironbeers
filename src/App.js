import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [beers, setBeers] = useState([])



  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL)
      .then((res) => {
        setBeers(res.data);
      })
      .catch((err) => {
        console.log("error getting beers from API", err);
      })
  }, [])

  const randomIndex = () => {
    return Math.floor(Math.random() * beers.length)
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/beers" element=<Beers /> />
        <Route path="/random-beer" element=<RandomBeer
          randomBeer={beers[randomIndex()]}
        /> />
        <Route path="/new-beer" element=<NewBeer /> />
        <Route path="/beers/:id" element=<SingleBeer /> />
      </Routes>
    </div>
  );
}

export default App;
