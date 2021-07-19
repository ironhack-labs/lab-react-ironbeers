import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home'
import axios from 'axios'
import {Switch, Route, withRouter} from 'react-router-dom'
import Beers from './components/Beers'
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

function App(props) {
  const [beers, setbeers] = useState([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
    setbeers(response.data)
  }, [])

  let handleAddNew = async (event) => {
    event.preventDefault()
    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value,
    }

    await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    setbeers({...beers, newBeer})
  }

  useEffect(() => {
     props.history.push('/')
  }, [beers])
  

  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/beers/:beerId'} render={(routeProps) => {
          return <SingleBeer {...routeProps}/>
        }}/>
        <Route path={'/beers'} render={() => {
          return <Beers beers={beers}/>
        }}/>
        <Route path={'/random-beer'} render={() => {
          return <RandomBeer />
        }}/>
         <Route path={'/new-beer'} render={(routeProps) => {
          return <NewBeer {...routeProps} onAdd={handleAddNew}/>
        }}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
