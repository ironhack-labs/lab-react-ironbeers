import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Beer from './components/Beer';
import Beers from './components/Beers';
import HomePage from './components/HomePage';
import NewBeer from './components/newBeer';
import RandomBeers from './components/RandomBeer';

function App() {
  const [beersList, setBeerList] = useState([]);
  useEffect(() => {getInfoFromAPI()}, []);
  const getInfoFromAPI = () => {
   axios
     .get(process.env.REACT_APP_API_URL)
     .then((res) => {
      console.log(res.data)
      setBeerList(res.data)
     })
     .catch((e) => console.log("error getting Info from API", e))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<Beers beersList={beersList}/>} />
        <Route path='/beers/:beerId' element={<Beer beersList={beersList}/>} />
        <Route path='/random-beer' element={<RandomBeers />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
