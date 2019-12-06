import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Navbar, Form, Nav, Button, FormControl } from 'react-bootstrap'
import BeerList from "./components/Beers"
import { Switch, Route } from 'react-router-dom'
import BeerRandom from './components/Beer-random'

// import CoasterList from "./components/coasters/Coaster-list"
// import CoasterDetails from "./components/coasters/Coaster-details"
// import CoasterForm from './components/coasters/Coaster-form'

class App extends Component {
  render() {
    return (
      <>

  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">IronBeers</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Beers</Nav.Link>
      <Nav.Link href="/random">Random Beer</Nav.Link>
      <Nav.Link href="#pricing">New Beer</Nav.Link>
    </Nav>
  </Navbar>

    <Switch>
      <Route exact path="/" component={BeerList} />
      <Route path="/random" component={BeerRandom} />
      {/* <Route path="/form" component={CoasterForm} /> */}
    </Switch>

  {/* <BeerList /> */}



</>
    );
  }
}

export default App;
