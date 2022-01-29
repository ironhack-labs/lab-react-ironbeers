import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {React, useState, useEffect }from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';

function App() {
  const [beers, setBeers] = useState([]); //at first is empty array
  const [loading, setLoading] = useState(true);


  const endpoint = 'https://ih-beers-api2.herokuapp.com/beers';
  useEffect(()=>{
    async function fetchData() {
      const response = await axios.get(endpoint);
      setBeers(response.data);
      console.log(response.data)
    }
    fetchData();
    setLoading(false);

  },[]);

  const handleNewItem = (data) => {
    console.log("hello")
    console.log(data)
  }


  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/random-beer">
          <RandomBeer/>
        </Route>
        <Route path="/beers/:id">
          <SingleBeer/>
        </Route>
        <Route path="/beers">
          <Beers beers={beers} loading={loading} />
        </Route>
        <Route path="/new-beer">
          <NewBeer onHandleSubmit={handleNewItem}/>
        </Route>
  
      </Switch>
    </Router>
    
  );
}

export default App;
