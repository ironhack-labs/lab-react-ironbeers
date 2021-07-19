import React from 'react';
import './App.css';
import { Route, Switch, withRouter} from 'react-router-dom'; //only here, where routes are created!!!

//import all components here:
import Home from './components/Home';
import BeerDetail from './components/BeerDetail';
import BeerList from './components/BeerList';
import RandomBeer from './components/RandomBeer';
import AddForm from './components/AddForm';
import axios from 'axios'
import {useState, useEffect} from 'react'

function App(props) {
  //handle routes in App.js
const [beers, updateBeers] = useState(null)

useEffect( ()=> {
 const getBeers = async () => {

  let response= await axios.get('https://ih-beers-api2.herokuapp.com/beers')
  updateBeers(response.data)
 }
getBeers()

}, [])

  const handleAddBeer = (event) => {
   event.preventDefault()

    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.brewed.value,
      brewers_tips: event.target.tips.value,
      attenuation_level: event.target.attenuation.value,
      contributed_by: event.target.contributed.value,
     
    }
    
    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((response) => {
           console.log(response.data)  //reponse message from the API
          updateBeers([...beers, newBeer])
          
      })
      .catch(() => {
        console.log('Adding beer failed! :( ')
      })

  }

useEffect(()=> {

  props.history.push('/')
}, [beers])



  return (
    <div>
     
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/beers'} render={()=> {
          return <BeerList beers={beers}/>
        }}/>
        <Route path={'/random-beer'} component={RandomBeer}/>

        <Route path={'/beers/:beerIndex'} render = {(routeProps)=> {
          return <BeerDetail   {...routeProps}/>
        }} />

        <Route path={'/new-beer'} render = {(routeProps)=> {
         return <AddForm  {...routeProps} onAddBeer= {handleAddBeer} />
        }}/>
        
      </Switch>
    </div>
  );
}

export default withRouter(App);


