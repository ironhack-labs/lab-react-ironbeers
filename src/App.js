import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import ListBeers from './components/ListBeers'
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import CreateNew from './components/CreateNew'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path='/beers' component={ListBeers} />
        <Route exact path="/beers/:beerId"
        render={(props) => <SingleBeer {...props} />}
      />
      <Route path="/random-beer" component={RandomBeer} />
      <Route path="/create-new" component={CreateNew} />
      </Router>
    
    </div>
  );
}

export default App;
