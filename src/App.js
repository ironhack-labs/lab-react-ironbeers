import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import BeerDetails from './components/BeerDetails';
import CreateBeer from './components/CreateBeer';
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import axios from 'axios';
import {API_URL} from './config'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


function App() {

  const [beers, setBeers] = useState([]);
  const [toHome, setToHome] = useState(false);
  const [found, setFound] = useState(true)

  useEffect(() => {
    axios.get(`${API_URL}/`)
      .then((res) => {
        setBeers(res.data)
      })
  }, [])


  const handleCreate = (e) => {
    e.preventDefault();
    const {name, tagline, description, firstBrewed, brewTips, attenuation, contributedBy} = e.currentTarget

    let newBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: firstBrewed.value,
      brewers_tips: brewTips.value,
      contributed_by: contributedBy.value,
      attenuation_level: attenuation.value
    }

    axios.post(`${API_URL}/new`, newBeer)
      .then((res) => {
        let createdBeer = res.data;
        let beersClone = JSON.parse(JSON.stringify(beers));
        beersClone.push(createdBeer);
        // Can I make setToHome run after setBeers with a setTimeOut or something like that? With classes, we could do the redirect inside the .setState, how to do this with functions?
        setBeers(beersClone);
        setToHome(true);
      })
  }

  const handleSearch = (e) => {
    let searchText = e.currentTarget.value;
    axios.get(`${API_URL}/search?q=${searchText}`)
      .then((res) => {
        !res.data.length ? setFound(false) : setFound(true)
        !res.data ? setBeers(beers) : setBeers(res.data)
      })
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" render={() => {
          return <BeersList found={found} beers={beers} onSearch={handleSearch}/>
        }} />
        <Route path="/beers/:beerId" render={(routeProps) => {
          return <BeerDetails beers={beers} {...routeProps}/>
        }} />
        <Route path="/random-beer" render={() => {
          return <RandomBeer />
        }} />
        <Route path="/new-beer" render={() => {
          return <CreateBeer toHome={toHome} onCreate={handleCreate}/>
        }} />
      </Switch>
    </div>
  );
}

export default App;
