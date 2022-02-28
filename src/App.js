import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import BeerDetails from './pages/BeerDetails'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beer/:id' element={<BeerDetails />} />
      </Routes>
    </div>
  )
}

export default App
