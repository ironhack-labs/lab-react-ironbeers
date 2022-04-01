import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './components/Misc/Navbar/Navbar';
import Home from './views/Home/Home';
import AllBeers from './views/AllBeers/AllBeers';
import SingleBeer from './views/SingleBeer/SingleBeer';
import RandomBeer from './views/RandomBeer/RandomBeer';
import './App.css';
import 'bulma/css/bulma.css';

function App() {
  const [beers, setBeers] = useState(null)


  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((getBeers) => {
      setBeers(getBeers.data);
    });
  }, []);
 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers beers={beers} />} />
        <Route path="/beers/:id" element={<SingleBeer beers={beers} />} />
        <Route path='/beers/random-beer' element={<RandomBeer beers={beers}/>}/>

      </Routes>
    </div>
  );
}

export default App;
