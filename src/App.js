import React from 'react';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import BeersList from './components/BeersList';
import { Container, Row, Col } from 'reactstrap';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/Random';
import NewBeer from './components/NewBeer';

function App() {
  return (

    <Container>
      <Row>
        <Col xs="6" sm="4"></Col>
        <Col xs="6" sm="4">
          <div className="App">

            <NavBar />
            <Switch>
              <Route  exact path={["/", "/home"]} component={Home} />
              <Route  exact path="/beers" component={BeersList} />
              <Route  exact path="/random-beer" component={RandomBeer} />
              <Route  exact path="/:_id" component={BeerDetail} />
              <Route  exact path="/beers/newbeer" component={NewBeer} />
            </Switch>

          </div>
        </Col>
        <Col xs="6" sm="4"></Col>
      </Row>
    </Container>
  );
}

export default App;
