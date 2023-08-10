import { Route, Routes } from 'react-router-dom';
import './App.css';
import Beers from './pages/Beers';
import HomePage from './pages/HomePage';
import BeerDetail from './pages/BeerDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './utils/constants';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  const [beers,setBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const beersData = await (await axios.get(baseUrl + '/')).data
        setBeers(beersData)
    }
    fetchData()
}, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/beers' element={<Beers beers={beers}/>}/>
        <Route path='/beers/:beerId' element={ <BeerDetail beers={beers} /> }/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
