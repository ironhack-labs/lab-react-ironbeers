import { Route, Routes } from 'react-router-dom';
import './App.css';
import Beers from './pages/Beers';
import HomePage from './pages/HomePage';
import BeerDetail from './pages/BeerDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './utils/constants';

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
      </Routes>
    </div>
  );
}

export default App;
