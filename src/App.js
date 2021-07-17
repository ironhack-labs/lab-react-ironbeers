import './App.css';

import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Beers from './Components/Beers';
import NewBeers from './Components/NewBeers';
import RandomBeers from './Components/RandomBeers';
import React from 'react';
import BeerDetail from './Components/BeersDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';



import { Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Container>
      <Row>
        <Col xs="6" sm="4"></Col>
        <Col xs="6" sm="4">
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path={['/', '/Home']} component={Home} />
              <Route exact path="/Beers" component={Beers} />
              <Route exact path="/NewBeers" component={NewBeers} />
              <Route exact path="/RandomBeers" component={RandomBeers} />
              <Route exact path="/:_id" component={BeerDetail} />
            </Switch>
          </div>
        </Col>
        <Col xs="6" sm="4"></Col>
      </Row>
    </Container>
  );
}

export default App;
