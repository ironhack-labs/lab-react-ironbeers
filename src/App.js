import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"; 
import axios from 'axios';
import HomePage from './Pages/HomePage';
import BeerList from './Pages/BeerList';
import RandomBeer from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer';
import Error from './Pages/Error';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import SingleBeer from './Pages/SingleBeer';

const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers'

function App() {

  const [beerData, setBeerData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(apiUrl);
      setBeerData(data.data)
    };
    getData();
  }, []);

  console.log('BeerData', beerData)

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        {/* <Route  path="/" element={<HomePage />} /> */}
        <Route  path="/" element={<HomePage />} />
        <Route path="/BeerList" element={<BeerList beerprops={beerData} />} />
        <Route  path="/:id" element={<SingleBeer />} />
        <Route path="/RandomBeer" element={<RandomBeer/>} />
        <Route path="/NewBeer" element={<NewBeer/>} />
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
