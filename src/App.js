import './App.css';
import BeerHomePage from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {

  const [beersData, setBeersData] = useState(null)

  useEffect(() => {

    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(result => {

        setBeersData(result.data[0].name)
      }
      )
  }, [])

  return (

    < BeerHomePage />

  )
}

export default App;
