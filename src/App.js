
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './componets/Homepage';
import ListOfBeers from "./componets/ListOfBeers"
// import BeerDetails from "./componets/BeerDetails"
import CreateBeer from "./componets/CreateBeer"
import RandomBeer from "./componets/RandomBeer"

function App() {


  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((result) => {
        console.log(result.data)
        setBeers(result.data);
      })
      .catch();
  }, []);


  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/beers' element={<ListOfBeers beerList={beers} />} />
      <Route path='/beers/:Id' element={<RandomBeer />} />
      <Route path='/beers/create' element={<CreateBeer />} />
    </Routes>
    </div>
  );
}

export default App;
