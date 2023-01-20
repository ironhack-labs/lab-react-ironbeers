import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import CreateBeer from './components/CreateBeer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [beerArr, setBeerArr] = useState(null);
  //const baseURL = process.env.REACT_APP_API_URL;
  //console.log(baseURL);

  useEffect(() => {
    getBeersFromApi();
  }, []);

  const getBeersFromApi = (() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeerArr(response.data);
      })
      .catch((error) => {
        console.log('Error getting Beers...', error);
      });
  });

  return (
    <div className='container-fluid m-0 p-0'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/beers' element={<BeerList beerArr={beerArr} />} />
          <Route path='/beers/:beerId' element={<BeerDetails beerArr={beerArr} />} />
          <Route path='/random-beer' element={<RandomBeer />} />
          <Route path='/new-beer' element={<CreateBeer callbackToUpdateList={getBeersFromApi} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
