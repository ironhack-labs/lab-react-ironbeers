import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap"
import BeersList from "./components/Beers"
import DetailsBeers from "./components/DetailsBeers"
import BeerRandom  from "./components/RandomBeer"

// import CoasterForm from './components/coasters/NewBeer'

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Beers</Nav.Link>
          <Nav.Link href="/random-beer">Random beer</Nav.Link>
          <Nav.Link href="/new-beer">New beer</Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/" component={BeersList} />
        <Route path="/details-beer/:id" component={DetailsBeers} />
        <Route path="/random-beer" component={BeerRandom} />
        {/* <Route path="/new-beer" component={NewBeer} /> */}
      </Switch>
    </>

  )
}

export default App;


