import React, { Component } from 'react';
import Home from './components/beers/Home'
import Random from './components/beers/Random'
import Header from './components/misc/Header'
import List from './components/beers/List'
import Individual from './components/beers/Individual'
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
        <section className='container'>
          <div className='column'>
          <Switch>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/beers' component={List}></Route>
              <Route exact path='/random' component={Random}></Route>
              <Route exact path='/create' component={Form}></Route>
              <Route exact path='/single/:id' component={Individual}></Route>
              <Redirect to='/home' />
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
