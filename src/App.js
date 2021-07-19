import React, {Component} from 'react';
import './App.css';
import { Switch, Route, withRouter} from "react-router-dom";
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'

import Beers from './components/Beers'
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer'
import Home from './components/Home'


function App(handleBeers) {

 const [beers, updateBeer] = useState()
  
  console.log('beers', beers)

  // use effect takes a callback as first , and second is an array of dependencies 
  useEffect(() => {
    const getBeers = async() => {
      try {
        let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        console.log('API data', response.data)
        updateBeer( response.data )
      }
      catch(err){
        console.log('failed to fetch beers', err)
      }

    }; getBeers()

  }, [])

  handleBeers = (event, singleBeer) => {     
  } 

  return (
    <div div className="App">            
        <Switch> 
          <Route   path="/beers/"  render={() => {
            return  <Beers list={beers} beersClickEvent={handleBeers}/>
          }}/>
          {/* pass below /beers/.id  ///  remember routeprops add req.params which is equal to what is in URL */}
          {/* <Route  path="/beers/"  render={() => {
            return  <Beers list={beers} beersClickEvent={handleBeers}/>
          }}/> */}
          <Route  path="/newbeer"  render={() => {
            return  <NewBeer />
          }}/>
          <Route  path="/randombeer"  render={() => {
            return  <RandomBeer />
          }}/>                    
          <Route path='/' render={() => {
            return <Home />
          }} />        
      </Switch>
    </div>  
  );
}

export default withRouter(App);
