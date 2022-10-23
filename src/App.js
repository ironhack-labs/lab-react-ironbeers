import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom"

import axios from "axios";
import {useEffect, useState} from "react"

import Home from './components/Home';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';



function App() {

  const [beers, setBeers] = useState([])
  const navigate = useNavigate();



    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response=>{
            setBeers(response.data)
        })
        .catch(error =>{
            console.log("error getting beers from api", error)
        })
    }, [])


     
    const createBeer = (newBeer)=>{
      axios.post ("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then(()=>{
        setBeers((prevList)=>{
          const newBeersList = [newBeer, ...prevList];
          return newBeersList;
        })
      })
      .catch(error=>{
        console.log("error creating new beer", error)
      })


      navigate('/beers');
    }


    const searchBeer = (searchedBeer) => {
      setBeers(() => {
        return searchedBeer !== ''
          ? beers.filter((beer) =>
              beer.name.toLowerCase().startsWith(searchedBeer.toLowerCase())
            )
          : beers;
      });
    };


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/beers" element={<Beers beers={beers} callbackToSearch={searchBeer}/>}/>
        <Route path="/random" element={<RandomBeer />}/>
        <Route path="/new" element={<NewBeer createBeer={createBeer} />}/>
        <Route path="/beers/:id" element={<BeerDetails beers={beers}/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
