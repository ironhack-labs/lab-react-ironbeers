import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [beers, setBeers ] = useState(null);
  const [name, setName] =useState ('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tips, setBrewers_tips] = useState('');
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState('');

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => setBeers(response.data))
    .catch(err => console.log(err))
    }, []);


const handleSubmitBeer = (event) => {
  event.preventDefault();
  const newBeerObject = {
    name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };
    setBeers([...beers, newBeerObject]);
  }


  return (
    <div className="App">
     <BrowserRouter>
<Routes>
<Route path='/' element ={<HomePage />}/>
<Route path="/beers" element={<Beers beers ={beers} />}/>
<Route path="/new-beer" element={<NewBeer 
name={name}
  tagline={tagline}
  description={description}
  first_brewed={first_brewed}
  brewers_tips={brewers_tips}
  attenuation_level={attenuation_level}
  contributed_by={contributed_by}
  handleSubmitBeer={handleSubmitBeer}
/>} />
<Route path="/random-beer" element={<RandomBeer beers={beers}/>} />
<Route path='/:beerId' element={<BeerDetails beers={beers}/>} />


</Routes>


</BrowserRouter>


    </div>
  );
}

export default App;
