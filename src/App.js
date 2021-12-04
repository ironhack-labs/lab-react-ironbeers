import React from 'react';
import './App.css';
import Home from './components/Home';
import { Routes, Route } from  "react-router-dom";
import NavBar from './components/NavBar';
import Beers from './components/Beers';
import {useEffect, useState} from "react"
import axios from 'axios';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import {useNavigate} from 'react-router-dom'
function App() {

  
  const [beers, setbeers] = useState([])
  const [beersCopy, setbeersCopy] = useState([])
  const navigate = useNavigate()
  
  // const navigate = useNavigate()
  // This runs only --ONCE-- when the component is mounted
  useEffect(() => {

       const getData = async () => {
          let response  = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
          setbeers(response.data)
          setbeersCopy(response.data)
      }

      getData()

  }, [])

  useEffect(() => {
    navigate('/')
  }, [ beers ])


  const handleSubmit = async (event) => {
    event.preventDefault()
    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value
    }
    let response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
    setbeers([response.data, ...beers])
    setbeersCopy([response.data, ...beers])

  }

 function handleSearch(event){
  let word = event.target.value
  let filteredBooks = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(word.toLowerCase())
  })
  
  // IMPORTANT: Here we only update copy that we create and not the original books state
  setbeersCopy(filteredBooks)
}
 

  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<Beers beers={beersCopy} btnSearch={handleSearch}/>} />
      <Route path="/beers/:beerId" element={<BeerDetail/>} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer btnSubmit={handleSubmit}/>} />
    </Routes>
    

        
    </div>
  );
}

export default App;
