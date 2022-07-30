import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import CreateBeer from './components/CreateBeer';
import Home from './components/Home';
import RandomBeer from './components/RandomBeer';


function App() {

  const [beers, setBeers] = useState(null);
  const [copy, setCopy] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BASE_URL + '/beers')
      .then((response) => {
        setBeers(response.data);
        setCopy(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);



  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers data={beers} search={setBeers} copy={copy} />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<CreateBeer update={setBeers} />} />
      </Routes>


    </div>
  );
}

export default App;
