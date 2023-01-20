
import './App.css';
import HomePage from "./components/HomePage"; 
import AllBeers from "./components/AllBeers"; 
import RandomBeer from "./components/RandomBeer"; 
import NewBeer from "./components/NewBeer"; 
import SingleBeer from "./components/SingleBeer"; 
import {  Route, Routes } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from 'react';


function App() {

  const [beersArr, setbeersArr] = useState([]);

  useEffect(() => {
    getbeersFromApi();

  }, []);

  const baseUrl = "https://ih-beers-api2.herokuapp.com/beers"

  const getbeersFromApi = () => {
    axios.get(baseUrl)
      .then((response) => {
        console.log(response.data);

        setbeersArr(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="App">


<Routes>
<Route path ="/" element ={  <HomePage/>}></Route>
<Route path ="/beers" element ={  <AllBeers beersArr ={beersArr}/>}></Route>
<Route path ="/beers/:beerId" element ={  <SingleBeer beersArr ={beersArr}/>}></Route>
<Route path ="/random-beer" element ={  <RandomBeer/>}></Route>
<Route path ="/new-beer" element ={  <NewBeer/>}></Route>
</Routes>
 




    </div>
  );
}

export default App;
