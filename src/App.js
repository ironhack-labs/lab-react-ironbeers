import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { Route, Switch } from "react-router-dom";

class App extends React.Component {

  // NotFound = () => {
  //   return <h1>404 Not Found</h1>
  // }
  // use this.not found in the return statement


  render() {

    const NotFound = () => {
      return <h1>404 Not Found</h1>
    }

    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <Header />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/beers" component={Beers} />
                <Route path="/beers/:id" component={BeerDetails} />
                <Route exact path="/random" component={RandomBeer} />
                <Route exact path='/new-beer' component={ NewBeer } />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
    </>
    );
  }
}

export default App;
