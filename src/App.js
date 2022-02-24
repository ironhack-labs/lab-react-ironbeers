
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import BeersPage from './components/pages/BeersPage/BeersPage';
import BeerPageDetails from './components/pages/BeerPageDetails/BeerPageDetails';
import RandomBeer from './components/pages/RandomBeer/RandomBeer';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import axios from 'axios';//


function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeersPage />} />
        <Route path='/beers/:beer_id' element={<BeerPageDetails />} />
        <Route path='/random-beer' element={<RandomBeer />} />

      </Routes>

    </>

  )

}

export default App;
