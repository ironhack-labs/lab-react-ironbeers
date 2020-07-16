import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'

import BeerList from './BeerList/BeerList'


function App() {

  return (
    <>

      <Switch>
        <Route exact path="/" render={() => <BeerList />} />
      </Switch>

    </>

  )
}

export default App