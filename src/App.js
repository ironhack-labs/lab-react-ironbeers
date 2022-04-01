import { Routes, Route} from 'react-router';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import BeerList from './views/BeerList/BeerList';
import BeerDetail from './views/BeerList/BeerDetails';
import { useEffect, useState } from "react";
import axios from "axios";
import RandomBeer from './views/RandomBeer';



function App() {

  const [beers, setBeers] = useState(null)
  const [randomBeer, setRandomBeer] = useState()


  useEffect(() => {
      axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((getBeers) => {
          setBeers(getBeers.data)
      })
  }, [])

  
  useEffect(()=> {
      axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
          .then((getRandom) => {
              setRandomBeer(getRandom.data)
          })
  },[])
 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/beers" element={<BeerList beers={beers}/>}/>
        <Route path="/beers/:id" element={<BeerDetail beers={beers}/>} />
        <Route path="/new-beer" element={<BeerDetail beers={beers}/>} />
        <Route path="/random" element={<RandomBeer randomBeer={randomBeer}/>} />
        <Route path="*" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
