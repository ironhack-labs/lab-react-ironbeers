// PACKAGES AND STUFF
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

// COMPONENTS
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

//IMAGES
import beersImg from './assets/beers.png';
import randomBeerImg from './assets/random-beer.png';
import newBeerImg from './assets/new-beer.png';

function App() {
  const [beersList, setBeersList] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        if (response.data)
          setBeersList(response.data);
        console.log('Data fetched.');
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage beersImg={beersImg}
                                           randomBeerImg={randomBeerImg}
                                           newBeerImg={newBeerImg} />}/>
        <Route path='/beers' element={<Beers
                                        beersList={beersList}/>} />
        <Route path='/beers/:id' element={<BeerDetails
                                            beersList={beersList}/>} />
        <Route path='/random-beer' element={<RandomBeer beersList={beersList} />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
