import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RandomBeer from './components/RandomBeer';
import ListBeers from './components/ListBeers';
import NewBeer from './components/NewBeer';
import { useState } from 'react';
import axios from 'axios';
import SingleBeer from './components/SingleBeer';

function App() {

const [allBeers, setAllBeers] = useState([])

const getBeersFromApi = ()=>{
  axios.get('https://ih-beers-api2.herokuapp.com/beers')
  .then((responseFromAPI)=>{
    console.log(responseFromAPI.data);
    setAllBeers(responseFromAPI.data)
    console.log(allBeers)
  })
  .catch((err)=>{console.log('error getting beers:',err)})
}



  return <div className="App">
     
<Routes>
<Route path='/' element={<Home/>}></Route>
  <Route path='/random-beer' element={<RandomBeer/>}></Route>
  <Route path='/beers' element={<ListBeers callbackToGetBeers={getBeersFromApi} beers={allBeers}/>}></Route>
  <Route path='/beers/:beerId' element={<SingleBeer/>}></Route>
  <Route path='/new-beer' element={<NewBeer/>}></Route>
</Routes>
    </div>
}

export default App;
