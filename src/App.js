import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import BeerDetails from './components/BeerDetails';
import Beers from './components/Beers';
import HomePage from './components/HomePage';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [beers, setBeers] = useState([])

  const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/")
          .then((response) => {
            console.log(response.data);
            setBeers(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }, [])

    const createBeer = (beerDetails) => {
      axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beerDetails)
      .then((response) => {
        setBeers([response.data, ...beers])
        navigate("/beers")
      })
      .catch((error) => {
        console.log(error);
      });}
  
  return (
    <div className="App">
      <Routes>
        <Route path="/beers" element={<Beers beers={beers} />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer callbackToCreate={createBeer} />}></Route>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/beers/:beerId" element={<BeerDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
