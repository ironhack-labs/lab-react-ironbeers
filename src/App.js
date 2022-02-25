import HomePage from './pages/HomePage';
import Header from './components/Header';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
      axios
          .get('https://ih-beers-api2.herokuapp.com/beers')
          .then((response) => setBeers(response.data))
          .catch((err) => console.log("Error getting Beers from API: ", err))
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> }></Route>
        <Route path="/beers" element={ <Beers beers={ beers }/>}></Route>
        <Route path="/beers/:beerId" element={ <BeerDetails beers={ beers } />}></Route>
        <Route path="/beers/create" element={ <div>Create Beer Form</div> }></Route>
        <Route path="/beers/random" element={ <BeerDetails beers={ beers } /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
