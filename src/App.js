import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import './services/BaseServices'
import { beersList} from './services/BeersService'
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Beers from './views/Beers/Beers';
import BeerDetail from './views/Beers/BeerDetail';
import RandomBeer from './views/Beers/RandomBeer';
import NewBeer from './views/Beers/NewBeer';
import './App.css';


function App() {
  const [beers, setBeers] = useState([]);

  useEffect(()=> {
      beersList()
        .then(response => setBeers(response))
        // console.log('las cerves', beers)
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beers" element={<Beers beers={beers}/>}/>
        <Route path="/beers/:id" element={<BeerDetail beers={beers}/>}/>
        <Route path="/randomBeer" element={<RandomBeer/>}/>
        <Route path="/newBeer" element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
