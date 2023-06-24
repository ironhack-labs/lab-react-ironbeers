import HomePage from './components/HomePage';
import Header from './components/Header';
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [BeersArr, setBeersArr] = useState([])

  useEffect(()=>{
    getBeers()
  },[])

  const getBeers = () => {
  axios
    .get(process.env.REACT_APP_API_URL)
    .then( response => {
      setBeersArr(response.data);

    })
    .catch(e => console.log(e))
  
  }
    const renderBeerList = () => {
      if(BeersArr.length > 0){
        return <BeersList Beers={BeersArr}/>
      } else {
        return <h1>Loading...</h1>
      }
    }



  return (
    <div className="App">
        
    <Header/>
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>/
      <Route path='/beers' element={renderBeerList()}/>
      <Route path='/random-beer' element={<RandomBeer />}/>
      <Route path='/new-beer' element={<NewBeer />}/>
      <Route path='/beers/:beerId' element={<BeerDetails/>}/>/
    </Routes>

</div>
  );
}

export default App;
