
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Beers from './components/Beers/Beers';
import BeerDetails from './components/BeerDetails/BeerDetails';
import RandomBeer from './components/RandomBeer/RandomBeer';
import AddBeer from './components/AddBeer/AddBeer';



function App() {
  const [beers, setBeers] = useState([]);

  const beerApi= 'https://ih-beers-api2.herokuapp.com/beers';

  const getBeers = async () => {
    try {
      let response = await axios.get(beerApi);
      console.log(response.data);
      setBeers(response.data);
    }
    catch(err) {
      console.log(err);
  }
 }

 useEffect(() => {  
  getBeers();
  }, []);
  
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<HomePage />}> </Route>
      <Route path='/beers' element={<Beers data={beers} />}> </Route>
      <Route path='/:id' element={<BeerDetails data={beers} />}> </Route>
      <Route path='/random' element={<RandomBeer data={beers} />}> </Route>
      <Route path='/new-beer' element={<AddBeer data={beers} />}> </Route>
    </Routes>
      
    </div>
  );
}

export default App;
