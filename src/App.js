import './App.css';
import Beers from './Beers'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'
import Home from './Home'
import BeerDetails from './BeerDetails';
import SearchBeer from './SearchBeer';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';
import {useState, useEffect} from 'react';


function App() {
  const [search, setSearch] = useState('')

  useEffect(() => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
          console.log(response.data)        
      })
      .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Beers search={search} />} />
        <Route path='/beers/random' element={<RandomBeer />} />
        <Route path='/beers/new' element={<NewBeer />} />
        <Route path='/beers/:id' element={<BeerDetails />} />
        <Route path='/beers/search' element={<SearchBeer />} />
      </Routes>
      
    </div>
  );
}

export default App;
