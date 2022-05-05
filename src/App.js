import './App.css';
import HomePage from './components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ListBeer from './components/ListBeers/ListBeers';
import { useEffect, useState } from "react"
import axios from "axios"
import RandomBear from './components/RandomBear/RandomBear';
import BeerDetails from './components/Beer-details/BeerDetails';
import NewBeer from './components/NewBeer/NewBeer';
function App() {

  const [allBeers, setAllBears] = useState([])

  useEffect(() => {
    getAllBeers()
  }, [])
  const getAllBeers = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then(({ data }) => {
        setAllBears(data)
      })
      .catch(err => err)
  }


  return (
    <div className="App">


      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<ListBeer allBeers={allBeers} />} />
        <Route path='/random-beer' element={<RandomBear />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beers/:id' element={<BeerDetails allBeers={allBeers} />} />
      </Routes>
    </div>
  );
}

export default App;
