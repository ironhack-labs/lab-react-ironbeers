import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ListAllBeers from './ListAllBeers'
import OneBeer from './OneBeer'
import RandomBeer from './RandomBeer'

import { Switch, Route } from 'react-router-dom'

function App() {

  return (
    <>

      <Switch>
        {/* <Route path="/newBeer" component={props => <FormBeer {...props} />} /> */}
        <Route exact path="/" component={ListAllBeers} />
        <Route path="/:beer_id" render={props => <OneBeer {...props} />} />
        <Route path="/random/:beer_id" render={props => <RandomBeer {...props} />} />
      </Switch>

    </>

  )
}

export default App;