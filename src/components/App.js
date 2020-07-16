import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import BeerList from './Beers/BeerList'



function App() {
  return (

    <div className="App">
      {/* <HomePage /> */}
      <BeerList />

    </div>
  )
}

export default App
