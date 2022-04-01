import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Beers from './views/Beers/Beers';
import RandomBeer from './views/Beers/RandomBeer';
import NewBeer from './views/Beers/NewBeer';
import BeerDetail from './views/Beers/BeerDetail';
import './services/BaseServices'
import { beersList} from './services/BeersService'
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
        <Route path="/randomBeer" element={<RandomBeer/>}/>
        <Route path="/newBeer" element={<NewBeer/>}/>
        <Route path="/beers/:id" element={<BeerDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
